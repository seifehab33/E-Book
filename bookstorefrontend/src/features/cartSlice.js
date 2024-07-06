// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//   },
// });
// export const selectCartItemsCount = state => state.cart.items.length;
// export const { addItem, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;
// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));

    },
    removeAll: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems');
    },
  },
});

export const selectCartItemsCount = state => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = state => {
  return state.cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
export const { addItem, removeItem , removeAll } = cartSlice.actions;
export default cartSlice.reducer;
