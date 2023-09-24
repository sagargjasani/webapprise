import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../../utils/types";
interface IState {
  products: IProduct[];
}
let initialState: IState = {
  products: [],
};
const productsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadData(state: IState, action: PayloadAction<IProduct[]>) {
      let products = action.payload.map((payload) => ({
        ...payload,
        isFav: false,
      }));
      state.products = products;
    },
    toggleFev(state: IState, action: PayloadAction<number>) {
      let product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.isFav = !product.isFav;
      }
    },
  },
});

export default productsSlice;
