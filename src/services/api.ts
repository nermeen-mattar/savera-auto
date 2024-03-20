import axios from 'axios';

const api = axios.create({
    baseURL: 'https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => config,
    (error) => {
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error),
);

export default api;
