//配置API接口地址
import qs from 'qs'
import store from "../store/index.js";
import router from "../router/index.js";

//var root = 'http://localhost:5000/api'
var root = 'http://47.106.139.187:5003/api'

//引用axios
var axios = require('axios')

// http request 拦截器
var storeTemp = store;
axios.interceptors.request.use(
  config => {
    if (storeTemp.state.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = "Bearer " + storeTemp.state.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit("saveToken", "");
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
          });
      }
    }
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
  }
);

//接口处理函数
function apiAxios(method, url, params, success, failure) {
  axios({
    method: method,
    url: url,
    data: method == 'POST' || method == 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      success(res.data)
      // if (res.data.success === true) {
      //     if (success) {
      //     }
      // } else {
      //     if (failure) {
      //         failure(res.data)
      //     } else {
      //         window.alert('error: ' + JSON.stringify(res.data))
      //     }
      // }
    })
    .catch(function (err) {
      let res = err
      if (err) {
        console.log('api error, HTTP CODE: ' + res)
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  getRoot: function () {
    return root
  },
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}