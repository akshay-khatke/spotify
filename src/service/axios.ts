import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getToken, refreshToken } from 'service';



const createAxios = (URL: string) => {


  const instance = axios.create({
    baseURL: `${URL}`,
    headers: {
      'Content-type': 'application/json',
      'access-control-allow-origin': '*',
    },
  });

  instance.interceptors.request.use(
    function (config) {
      // console.log(config, 'request interceptor success');

      return config;
    },
    function (error) {
      console.error(error, 'request interceptor error');

      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function (response) {
      // console.log(response, ' => response interceptor success');
      return response;
    },

    async function (error: AxiosError) {
      console.log(error.response, 'error');
      if (error.response?.status === 401) {
        const result = await refreshToken();
        if (true) {
          // instance({...error.config});
          // debugger;
          // console.info('Token refreshed successfully');

          // console.info('Last API call', error.config);

          // console.info('Last API call', error.config);

          // const lastAPIConfig = {...error.config};

          // lastAPIConfig['headers'].Authorization = getToken();
          // lastAPIConfig.headers.Authorization
          // console.log( lastAPIConfig.headers['Authorization'],"authorization")
          // const response = await instance(lastAPIConfig);

          // return response;
        } else {

        }
      }
      return error.response;

    },
  );

  return {
    get: (config: AxiosRequestConfig) =>
      instance({
        method: 'GET',
        ...config,

      }),
    post: (config: AxiosRequestConfig) =>
      instance({
        method: 'POST',
        ...config,

      }),
    put: (config: AxiosRequestConfig) =>
      instance({
        method: 'PUT',
        ...config,
      }),
    instance,
  };
};

export default createAxios;
