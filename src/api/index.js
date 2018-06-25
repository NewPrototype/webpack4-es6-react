import axios from 'axios';

import querystring from 'querystring';

import config from './../config';
const { server,devServer } = config;
import { message } from 'antd';


if(__LOCAL__){   //true 为开发环境
  axios.defaults.baseURL = devServer;  //请求测试域名和端口
}else {
  axios.defaults.baseURL = server;  //请求正式域名和端口
}

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
    // config.headers = {
    //   authorization: `Bearer ${localStorage.getItem('toKen')}`,   //根据需求是否需要token
    // };
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

// login({user:admin,password:'123456'}).then((data)=>{console.log('数据处理')})
