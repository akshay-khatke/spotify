import { Request } from "model";
import url from "service/urls";


const getAuthApi = ({get, post, put}: Request) => {

  const authentication = {
    login: (params: any) => get({url: url.auth.authUrl.login, params}),
    register: (params: any) => post({url: url.auth.authUrl.register, params}),  
  };

  return {
    authentication,
  };
};

export default getAuthApi;
