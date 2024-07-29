import { apiInstance } from "../utils";

type loginRequest = {
    mobileNumber: string;
    password: string;
}

type loginResponse = {
    accessToken: string;
}

export const login = (req: loginRequest): Promise<loginResponse> =>
    apiInstance.post('/auth/user/v3/login', req).then(res => res.data)

export type loginApi = typeof login;