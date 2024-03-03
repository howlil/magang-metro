import axios from 'axios';
const BASE_URL = 'https://28jqlrhg-5000.asse.devtunnels.ms/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});