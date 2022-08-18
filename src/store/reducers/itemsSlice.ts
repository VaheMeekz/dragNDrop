import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, order: 1, text: "asd" },
    { id: 2, order: 2, text: "qwe" },
    { id: 3, order: 3, text: "rty" },
    { id: 4, order: 4, text: "hgj" },
    { id: 5, order: 5, text: "ghj" },
  ],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addNewItems(state, action) {
      state.items.push({
        id: state.items.length + 1,
        text: action.payload,
        order: state.items.length + 1,
      });
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editItem(state, action) {
      state.items.find((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
      });
    },
  },
});

export const { addNewItems, deleteItem, editItem } = itemsSlice.actions;
export default itemsSlice.reducer;
