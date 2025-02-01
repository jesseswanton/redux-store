import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
  SET_USER,
} from './actions';

const initialState = {
  user: null, // New global user state
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
  loading: false,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            return {
              ...product,
              purchaseQuantity: action.purchaseQuantity,
            };
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartOpen: state.cart.length > 1,
        cart: state.cart.filter((product) => product._id !== action._id),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // Optional: loading actions (if you implement them)
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.products,
      };

    // Default case to avoid crashes
    default:
      return state;
  }
};
