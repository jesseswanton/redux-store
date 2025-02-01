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
    SET_USER,
    LOGOUT_USER,
  } from './actionTypes';
  
import { QUERY_USER } from '../utils/queries';
import { client } from '../utils/apolloClient';

  // New global user state
export const setUser = (userData) => ({
    type: SET_USER,
    user: userData,
});

//New global find user state
export const fetchUser = () => async (dispatch) => {
try {
    const { data } = await client.query({
    query: QUERY_USER,
    });

    if (data?.user) {
    dispatch(setUser(data.user));
    }
} catch (error) {
    console.error('Error fetching user:', error);
}
};

export const logoutUser = () => {
    return {
      type: LOGOUT_USER,
    };
  };

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

export const removeFromCart = (_id) => {
return {
    type: REMOVE_FROM_CART,
    _id: _id,
};
};

export const clearCart = () => {
return {
    type: CLEAR_CART,
};
};

export const updateCartQuantity = (_id, quantity) => {
return {
    type: UPDATE_CART_QUANTITY,
    _id: _id,
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

// async actions
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

// error handling 
export const fetchProductsFailure = (error) => {
return {
    type: 'FETCH_PRODUCTS_FAILURE',
    error,
};
};
