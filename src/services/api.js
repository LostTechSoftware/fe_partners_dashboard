import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend-env.eba-x4hi9e3v.us-east-2.elasticbeanstalk.com'
});

api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token') 

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api;
