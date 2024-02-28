import { RequestOptions } from "../interfaces/interface";
// enums.ts
export enum UserType {
  ADMIN = 'Admin',
  USER = 'User',
  DOCTOR = 'Doctor',
  RANDOM = 'Random',
}

export enum Pages {
  HOME = '/',
  DASHBOARD = '/dashboard/app'
}

// define endpoints here
export const ApiEndpoint: Record<string, RequestOptions> = {
  LOGIN: { url: '/login', method: 'POST', headers: { 'Content-Type': 'application/json'}},
  LOGINVERIFY: { url: '/login/verify', method: 'POST', headers: { 'Content-Type': 'application/json'}},
};
