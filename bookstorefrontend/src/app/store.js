import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import authReducer from "../features/authSlice"
const preloadedState = {
  cart: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
  },
};
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  preloadedState,
});
