import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./reduxHooks";
import productsSlice from "../store/productSlice/productSlice";
const actions = {
  ...productsSlice.actions,
};
export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};
