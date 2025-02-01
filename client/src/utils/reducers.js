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
  LOGOUT_USER,
} from './actions';

import decode from 'jwt-decode';

const initialState = {
  // New Redux global user state
  token: localStorage.getItem('id_token') || null,
  user: localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : null,
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
        token: action.payload?.token || null,
        user: action.payload?.user || null,
      };

    case LOGOUT_USER:
      // Clear token
      localStorage.removeItem('id_token');
      return {
        ...state,
        token: null,
        user: null,
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
        cart: state.cart.map((product) =>
          action._id === product._id
            ? { ...product, purchaseQuantity: action.purchaseQuantity }
            : product
        ),
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

    default:
      return state;
  }
};
