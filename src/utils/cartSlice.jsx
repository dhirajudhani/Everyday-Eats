
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurant: null,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.restaurant === null) {

        state.restaurant = action.payload.resInfo;
        state.items.push({...action.payload.item, quantity: 1});
      } else if (state.restaurant.id != action.payload.resInfo.id) {
        state.restaurant = action.payload.resInfo;
        state.items = [{...action.payload.item, quantity: 1}];
      } else {
        state.items.push({...action.payload.item, quantity: 1});
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.restaurant = null;
    },

    // Increment the quantity of a specific item
    incrementQuantity: (state, action) => {
      const indexToIncrement = action.payload;
      if(indexToIncrement >= 0 && indexToIncrement < state.items.length) {
        state.items[indexToIncrement].quantity += 1;
      }
    },

    // Decrement the quantity of a specific item
    decrementQuantity: (state,action) => {
      const indexToDecrement = action.payload;
      if (
        indexToDecrement >= 0 &&
        indexToDecrement < state.items.length
      ) {
        if (state.items[indexToDecrement].quantity > 1) {
          state.items[indexToDecrement].quantity -= 1;
        } else {
          // If quantity is 1, remove the item
          state.items.splice(indexToDecrement, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
