import { createSlice } from "@reduxjs/toolkit";
export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      let newArr = [...state.items];

      if (index >= 0) {
        newArr.splice(index, 1);
      } else {
        alert("Oops, there's no such item in your basket!");
      }
      state.items = newArr;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
