// import { Action } from "../types";
// import { UserLoggedInState } from "../../interfaces/interface";
  
//   const initialState: UserLoggedInState = {
//     isAuthenticated: false,
//     user: null,
//   };
  
//   const reducer = (state: UserLoggedInState = initialState, action: Action): UserLoggedInState => {
//     switch (action.type) {
//       case 'LOGIN_PENDING':
//         return {
//           ...state,
//           isAuthenticated: true,
//         };
  
//       case 'LOGIN_FULFILLED':
//         console.log(state);
//         return {
//           ...state,
//           isAuthenticated: false,
//         };
  
//       case 'LOGIN_REJECTED':
//         return {
//           ...state,
//           isAuthenticated: false,
//         };
  
//       case 'USER_PENDING':
//         return {
//           ...state,
//           isAuthenticated: true,
//         };
  
//       case 'USER_FULFILLED':
//         console.log(action.payload);
//         return {
//           ...state,
//           user: action.payload.data,
//           isAuthenticated: false,
//         };
  
//       case 'USER_REJECTED':
//         return {
//           ...state,
//           isAuthenticated: false,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default reducer;
  