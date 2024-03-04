import { RequestOptions } from "../interfaces/interface";
// enums.ts
export enum UserType {
  ADMIN = 'Admin',
  PATIENT = 'Patient',
  DOCTOR = 'Doctor',
  RANDOM = 'Random',
}

export enum Pages {
  HOME = '/',
  DASHBOARD = '/dashboard/app',
  PROFILE = '/dashboard/profile'
}

export enum ProfileTab {
  tabTitle1="OverView",
  tabTitle2="Profile",
  tabTitle3="Activity",
}

// define endpoints here
export const ApiEndpoint: Record<string, RequestOptions> = {
  LOGIN: { url: '/login', method: 'POST', headers: { 'Content-Type': 'application/json'}},
  LOGINVERIFY: { url: '/login/verify', method: 'POST', headers: { 'Content-Type': 'application/json'}},
  RESENDLOGINOTP: { url: '/login/otp/resend', method: 'POST', headers: { 'Content-Type': 'application/json'}},
};