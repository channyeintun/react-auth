import axios from 'axios';
import { API_URL } from './config';
import useAuthStore from '../store/auth';

const apiInstance = axios.create({
    baseURL: API_URL,
});

export const setAPIToken = (token: string) => {
    apiInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeAPIToken = () => delete apiInstance.defaults.headers.Authorization;

export function set401LogoutIntercetor(redirectCallback: () => void = () => undefined) {
    apiInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error.response && error.response.status === 401 && originalRequest.url !== '/login') {
                removeAPIToken();
                redirectCallback();
                useAuthStore.setState({
                    token: undefined,
                });
            }

            return Promise.reject(error);
        },
    );
}

const apiUtils = {
    setAPIToken,
    removeAPIToken,
    set401LogoutIntercetor,
};

export { apiUtils, apiInstance };
