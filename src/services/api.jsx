import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '../contexts/auth';

const testeAPI = 'https://a315-177-185-71-228.ngrok-free.app/'

// console.log("Teste: ", Constants.expoConfig.extra.API_URL)

const api = axios.create({
  baseURL: `${testeAPI}`
  // baseURL: `${Constants.expoConfig.extra.API_URL}`
});

// const AxiosInterceptor = ({ children }) => {
//   const { clearVerifiedPhone, clearVerifiedEmail, signOut } = useAuth();

//   useEffect(() => {
//     const resInterceptor = response => response

//     const errInterceptor = error => {
//       if (error?.response?.data?.message === 'Your phone number is not verified.') {
//         clearVerifiedPhone()
//       }
//       if (error?.response?.data?.message === 'Your email address is not verified.') {
//         clearVerifiedEmail()
//       }
//       if (error?.response?.data?.message === 'System only available during working hours.') {
//         signOut(error?.response?.data?.message)
//       }

//       return Promise.reject(error);
//     }

//     const interceptor = api.interceptors.response.use(resInterceptor, errInterceptor);

//     return () => api.interceptors.response.eject(interceptor);

//   }, [])

//   return children;
// }

export default api;
// export { AxiosInterceptor };

