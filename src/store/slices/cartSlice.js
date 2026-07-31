import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push({ ...action.payload, qty: 1 });
      state.cartCount++;
    },

    increament: (state, action) => {
      const item = state.cartItems.find((item)=> item.id==action.payload.id);
      item.qty++;
      state.cartCount++;
    },
    decrement: (state, action) => {
      const item = state.cartItems.find((item)=>item.id==action.payload.id);
      if(item.qty > 1){
        item.qty--;
      } else {
        state.cartItems = state.cartItems.filter((item)=>item.id!=action.payload.id);
      }

      state.cartCount--;
    },
  },
});

export const { addItem, increament, decrement } = cartSlice.actions;
export default cartSlice.reducer;
