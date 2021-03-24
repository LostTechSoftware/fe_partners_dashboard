import axios from 'axios';
import 'dotenv'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER
});

api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token') 

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api;
