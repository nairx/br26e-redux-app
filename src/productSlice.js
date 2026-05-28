import { createSlice } from "@reduxjs/toolkit";

const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 45 },
];
const productSlice = createSlice({
  name: "product",
  initialState: { items: products },
  reducers: {
    deleteProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { deleteProduct,addProduct } = productSlice.actions;
export default productSlice.reducer;
