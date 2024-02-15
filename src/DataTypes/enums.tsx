import { RequestOptions } from "../interfaces/interface";
// enums.ts
export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
  RANDOM = 'random',
}

export enum Pages {
  HOME = '/',
  DASHBOARD = '/dashboard/app'
}

// define endpoints here
export const ApiEndpoint: Record<string, RequestOptions> = {
  LOGIN: { url: '/login', method: 'POST', headers: { 'Content-Type': 'application/json'}},
};
