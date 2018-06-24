import axios from 'axios';

import querystring from 'querystring';

import config from './../config';
const { server } = config;
import { message } from 'antd';


axios.defaults.baseURL = server;  //请求域名和端口

// 发送请求前拦截器
axios.interceptors.request.use(
  config => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
    ) {
      config.data = querystring.stringify(config.data);
    }
    config.headers = {
      authorization: `Bearer ${localStorage.getItem('toKen')}`,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/** 
 * 返回数据批量处理接口
 */
axios.interceptors.response.use(
  response => {
    if (response.status) {
      if (response.data.code == 1) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      return response.data.result;
    } else {
      message.error(response.data.message);
    }
    return response;
  },
  error => {
    message.error(error.response.data.message);

    return error.response.data;
    // return Promise.reject(error);
  }
);

// 登陆
export async function login(params = {}) {
  return await axios.get('/login', { params });
}

// login({user:admin,password:'123456'}).then((data)=>{console.log(数据处理)})
