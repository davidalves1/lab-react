import { http } from './http';

export const fetchUser = user => http.get(`users/${user}`);