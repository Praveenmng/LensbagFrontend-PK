// src/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.DEV
    ? 'http://localhost:5000/api'
    : 'https://lensbagbackend-pk.onrender.com/api',
  withCredentials: true,
});

export default instance;
