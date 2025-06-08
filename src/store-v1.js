// import { createStore, combineReducers } from "redux";
//
// const initialAccountState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: 0,
// };
//
// const initialCustomerState = {
//   fullName: "",
//   nationalID: "",
//   createdAt: "",
// };
//
// function accountReducer(state = initialAccountState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         balance: state.balance + action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }
//
// function customerReducer(state = initialCustomerState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }
//
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(rootReducer);
// // console.log("hi redux");
// // store.dispatch({ type: "account/deposit", payload: 500 });
// // console.log(store.getState());
// // store.dispatch({ type: "account/withdraw", payload: 200 });
// // console.log(store.getState());
// // store.dispatch({
// //   type: "account/requestLoan",
// //   payload: { amount: 1000, purpose: "Buy a car" },
// // });
// // console.log(store.getState());
// // store.dispatch({ type: "account/payLoan" });
// // console.log(store.getState());
//
// function deposit(amount) {
//   return { type: "account/deposit", payload: amount };
// }
// store.dispatch(deposit(600));
// console.log(store.getState());
//
// function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// store.dispatch(withdraw(200));
// console.log(store.getState());
//
// function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }
// store.dispatch(requestLoan(1000, "Buy a cheap Car"));
// console.log(store.getState());
//
// function payloan() {
//   return { type: "account/payLoan" };
// }
// store.dispatch(payloan());
// console.log(store.getState());
//
// function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }
// store.dispatch(createCustomer("Naser Ahadi", "21212"));
// console.log(store.getState());
//
// function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
// store.dispatch(updateName("Jonas Zandi"));
// console.log(store.getState());
//
// store.dispatch(deposit(800));
// console.log(store.getState());
