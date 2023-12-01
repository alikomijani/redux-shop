import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import postReducer from "./post/postSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  post: postReducer,
});

export default rootReducer;
