import axios from 'axios';
<<<<<<< HEAD
import 'dotenv'
=======
import 'dotenv/config'
>>>>>>> 538d414dbc5d1f0ed0b5b334535bab820c878343

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
