import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";



const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  // łączy w jeden duży reduktor
  // reducer: { counter: counterSlice.reducer }
});

export default store;

// Without Redux Toolkit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
