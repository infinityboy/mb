/*
 * @Descripttion:
 * @version:
 * @Author: infinityboy
 * @Date: 2020-09-21 10:28:05
 * @LastEditors: infinityboy
 * @LastEditTime: 2020-09-21 10:28:23
 */
import axios from "axios";
import { Toast } from "vant";

//获取token
function getTokenByLocal() {
  let token = localStorage.getItem("token") || "";
  return token;
}

const http = axios.create({
  baseURL: "/api/",
  timeout: 3000,
  headers: {
    "Cache-Control": "no-cache",
  },
});

http.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    if (getTokenByLocal()) {
      config.headers["token"] = getTokenByLocal();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (config) => {},
  (error) => {
    if (error && error.response) {
      if (error.response.status == 401) {
        Toast({
          type: "fail",
          message: "登陆超时，请重新登录",
          duration: 1000,
        });
        location.href = "/";
      } else {
        Toast({
          type: "fail",
          message: "请求失败",
          duration: 1000,
        });
      }
    }
  }
);

export default http;
