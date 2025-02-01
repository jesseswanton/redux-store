import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_CART_QUANTITY,
    TOGGLE_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
  } from './actionTypes';
  
  // Action creators for products
  export const updateProducts = (products) => {
    return {
      type: UPDATE_PRODUCTS,
      products,
    };
  };
  
  // Action creators for cart
  export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      product,
    };
  };
  
  export const addMultipleToCart = (products) => {
    return {
      type: ADD_MULTIPLE_TO_CART,
      products,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      _id: productId,
    };
  };
  
  export const clearCart = () => {
    return {
      type: CLEAR_CART,
    };
  };
  
  export const updateCartQuantity = (productId, quantity) => {
    return {
      type: UPDATE_CART_QUANTITY,
      _id: productId,
      purchaseQuantity: quantity,
    };
  };
  
  export const toggleCart = () => {
    return {
      type: TOGGLE_CART,
    };
  };
  
  // Action creators for categories
  export const updateCategories = (categories) => {
    return {
      type: UPDATE_CATEGORIES,
      categories,
    };
  };
  
  export const updateCurrentCategory = (category) => {
    return {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: category,
    };
  };
  
  // Optional async actions (if you add a loading state)
  export const fetchProductsRequest = () => {
    return {
      type: 'FETCH_PRODUCTS_REQUEST',
    };
  };
  
  export const fetchProductsSuccess = (products) => {
    return {
      type: 'FETCH_PRODUCTS_SUCCESS',
      products,
    };
  };
  