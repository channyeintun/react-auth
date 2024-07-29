import { apiInstance } from "../utils";

export const getCurrentUser = () => apiInstance.get('https://api.sarphat.com/api/users/currentInfo').then(res => res.data);

export type getCurrentUserApi = typeof getCurrentUser;