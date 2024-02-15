// import axios, {  AxiosResponse } from 'axios';
// import { Action } from '@reduxjs/toolkit';
// import { Dispatch } from '@reduxjs/toolkit';

// export interface LoginAction extends Action<'LOGIN'> {
//     payload: AxiosResponse;
//     type: 'LOGIN'
// }

// interface UserAction extends Action<'USER'> {
//     payload: AxiosResponse;
// }

// export const login = (url: string, value: { email: string; password: string }) => {
//     return async (dispatch: Dispatch<LoginAction>) => {
//         try {
//             const response: AxiosResponse = await axios({
//                 url,
//                 method: 'POST',
//                 data: value,
//             });

//             dispatch({
//                 type: 'LOGIN',
//                 payload: response,
//             });
//         } catch (error) {
//             // Handle error if needed
//             console.error('Login error:', error);
//         }
//     };
// }

// export const getUser = () => {
//     return async (dispatch: Dispatch<UserAction>) => {
//         try {
//             const url = `${process.env.REACT_APP_URL}/login`;
//             const response: AxiosResponse = await axios({
//                 url,
//                 method: 'GET',
//             });

//             dispatch({
//                 type: 'USER',
//                 payload: response,
//             });
//         } catch (error) {
//             // Handle error if needed
//             console.error('Get User error:', error);
//         }
//     };
// }
