import axios from 'axios';
import { API_URL } from './config';
import useAuthStore from '../store/auth';

const apiInstance = axios.create({
    baseURL: API_URL,
});

apiInstance.defaults.headers["Cache-Control"] = "no-cache";
apiInstance.defaults.headers["Pragma"] = "no-cache";
apiInstance.defaults.headers["Expires"] = "0";

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
                useAuthStore.setState({
                    token: undefined,
                });
                redirectCallback();
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
