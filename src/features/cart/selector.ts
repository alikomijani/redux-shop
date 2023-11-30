import { RootState } from "../../type";

export const selectProductCount = (state: RootState) =>
  state.cart.reduce((sum, item) => sum + item.count, 0);
