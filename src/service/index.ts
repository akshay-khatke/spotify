import axios from 'axios';
import { getDeviceInfo } from 'deviceInfo';
import {
  getAuthApi,

} from 'service/apis';
import createAxios from 'service/axios';
import { getItem, keys } from 'store/localStore';
import { URL } from './urls';

const { instance: authInstance, ...auth } = createAxios(URL.MAIN);


const api = {
  auth: getAuthApi(auth),
};

const getToken = () => {
  return `Bearer ${axios.defaults.headers.common['Authorization']}`;
};

const setToken = (token: string) => {

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  authInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const refreshToken = async () => {

  const user = await getItem(keys.User);

};

export { setToken, getToken, refreshToken };
export default api;
