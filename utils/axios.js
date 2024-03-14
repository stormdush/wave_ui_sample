import axios from 'axios';

const apiService = {
    baseURL: 'https://192.168.10.101:3000',
    headers: {
        Authorization: 'token', // Set common Authorization headers
        SessionID: 'session', // Set other custom headers
    },
    // Initialize the Axios instance
    init() {
        axios.defaults.baseURL = this.baseURL;
        axios.defaults.headers.common = this.headers;
    },

    // Get method
    async get(endpoint) {
        try {
            const response = await axios.get(endpoint);
            return response;
        } catch (error) {
            throw new Error(`ApiService ${error}`);
        }
    },

    // Post method
    async post(endpoint, data) {
        try {
            const response = await axios.post(endpoint, data);
            console.log('-----------------', response);
            return response;
        } catch (error) {
            throw new Error(`ApiService ${error}`);
        }
    },
};

const setTokenInHeader = (token) => {
    apiService.defaults.headers.common['Authorization'] = token;
};

export default { setTokenInHeader, apiService };
