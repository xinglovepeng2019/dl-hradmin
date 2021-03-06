import axios from 'axios'


// 创建axios实例
const instance = axios.create({
  baseURL: '',   //基地址
  timeout: 3000   //请求超时
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么  请求头上设置token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么  响应内容的错误信息处理
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;