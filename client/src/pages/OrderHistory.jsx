import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../redux/actions'; 

function OrderHistory() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user || !user.orders) {
      dispatch(fetchUser());
    }
  }, [user, dispatch]);

  if (!user) {
    return <p>Loading...</p>; // Or a loading spinner
  }

  return (
    <div className="container my-1">
      <Link to="/">← Back to Products</Link>

      {user.orders && user.orders.length > 0 ? (
        <>
          <h2>
            Order History for {user.firstName} {user.lastName}
          </h2>
          {user.orders.map((order) => (
            <div key={order._id} className="my-2">
              <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
              <div className="flex-row">
                {order.products.map(({ _id, image, name, price }, index) => (
                  <div key={index} className="card px-1 py-1">
                    <Link to={`/products/${_id}`}>
                      <img alt={name} src={`/images/${image}`} />
                      <p>{name}</p>
                    </Link>
                    <div>
                      <span>${price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default OrderHistory;
