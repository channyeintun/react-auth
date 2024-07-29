import { apiInstance } from "../utils";

type loginRequest = {
    email: string;
    password: string;
}

type loginResponse = {
    data: {
        token: string;
    }
}

export const login = ({ email, password }: loginRequest): Promise<loginResponse> =>
    apiInstance.post('/logistics-service/signin', {
        email, password
    }).then(res => res.data)

export type loginApi = typeof login;