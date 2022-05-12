import Axios from 'axios';
import qs from 'qs';
import config from './config';

const axios = Axios.create({
  baseURL: config.host + config.prefix,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

export default axios;
