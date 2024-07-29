import { apiInstance } from "../utils";

type userResponse = {
    id: number;
    fullName: string;
}
export const getCurrentUser = (): Promise<userResponse> =>
    apiInstance.get('/users/currentInfo').then(res => res.data);

export type getCurrentUserApi = typeof getCurrentUser;