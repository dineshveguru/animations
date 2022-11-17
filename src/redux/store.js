import counterReducer from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
