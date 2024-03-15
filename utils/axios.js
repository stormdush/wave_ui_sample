import axios from 'axios';

// 创建并导出 Axios 实例
const instance = axios.create({
    baseURL: 'https://192.168.10.101:3000',
    headers: {
        Authorization: 'token'
    },
    withCredentials: true,
});

instance.defaults.withCredentials = true;

// Request interceptor
instance.interceptors.request.use(
    (config) => {
        // Get the token from local storage and add it to the request header before the request is sent
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response) => {
        // When the response is received, check whether the response header contains a new token
        const newToken = response.headers.authorization;
        if (newToken) {
            // If a new token exists, the token in the local storage is updated
            localStorage.setItem('token', newToken);
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Get method
export const apiGet = async (endpoint) => {
    try {
        const response = await instance.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error(`ApiService ${error}`);
    }
};

// Post method
export const apiPost = async (endpoint, data) => {
    try {
        const response = await instance.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw new Error(`ApiService ${error}`);
    }
};
