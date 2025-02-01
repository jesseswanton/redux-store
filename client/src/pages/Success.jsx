import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
//Redux
import { useDispatch } from 'react-redux';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
//Redux
import { clearCart } from '../redux/actions';
import { idbPromise } from '../utils/helpers';

function Success() {
  //Redux
  const dispatch = useDispatch();
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        try {
          const { data } = await addOrder({ variables: { products } });

          if (data?.addOrder) {
            //Redux
            dispatch(clearCart());
            //Redux
            data.addOrder.products.forEach((item) => {
              idbPromise('cart', 'delete', item);
            });
          }
        } catch (error) {
          console.error('Order submission error:', error);
        }
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder, dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
