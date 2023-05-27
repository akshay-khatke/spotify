import authUrls from './apiUrl';


const LOCAL = 'Local';
const PROD = 'Production';
const DEV = 'Development';

const url = {
  auth: authUrls(),
};

const getEnvVariables = (env: string) => {
  return env === LOCAL
    ? //local
    {
      MAIN: 'http://192.168.1.100:3000',
    }
    : env === PROD
      ? //prod
      {
        MAIN: 'http://192.168.1.100:3000',
      }
      : //dev
      {
        MAIN: 'http://192.168.1.100:3000'      
      };
};

const URL = getEnvVariables(DEV);


export { URL };

export default url;
