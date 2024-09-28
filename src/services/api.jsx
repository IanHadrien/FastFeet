import axios from 'axios';

// const testeAPI = 'https://7c67-177-185-71-232.ngrok-free.app/'
const testeAPI = 'api-url'

const api = axios.create({
  baseURL: `${testeAPI}`
  // baseURL: `${Constants.expoConfig.extra.API_URL}`
});

export default api;
// export { AxiosInterceptor };

