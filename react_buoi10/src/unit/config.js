import axios from "axios";

// luu data ra local storage
export const configs = {
  setStore: (name, value) => {
    localStorage.setItem(name, value);
  },
  getStore: (name) => {
    return localStorage.getItem(name);
  },
  /**
   * bien doi sang jSON truoc khi luu vao Storage
   */
  setStoreJSON: (name, value) => {
    // bien doi  thanh chuoi
    let value1 = JSON.stringify(value);

    // luu vao store
    localStorage.setItem(name, value1);
  },
  /**
   * lay data tu Storage
   */
  getStoreJSON: (name) => {
    if (localStorage.getItem(name)) {
      let content = JSON.parse(localStorage.getItem(name));

      return content;
    }
    return null;
  },
  /**
   * luu theo cookie
   * @param {*} value
   * @param {*} days
   * @param {*} name
   */
  setCookie: (value, days = 30, name ) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  /**
   * lay data theo cookie
   * @param {*} name
   * @returns
   */
  getCookie: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  ACCESS_TOKEN: 'accessToken',
  USER_LOGIN:'userLogin'
};

export const {
  setCookie,
  setStore,
  setStoreJSON,
  getCookie,
  getStore,
  getStoreJSON,
  ACCESS_TOKEN,
  USER_LOGIN,
} = configs;



// cấu hình  interceptor (Cau hình cho các  request và response) 
const TOKEN_CYBERSOFT = 'z123456';

export const http = axios.create({
  baseURL:`https://shop.cyberlearn.vn/api`,
  timeout:6000// thoi gian duy tri 600s
})
console.log("🚀 ~ file: config.js:86 ~ http:", http)

// cấu hình request 
http.interceptors.request.use((configs) => {

  // cau hinh header  add them  thuoc tinh  Authorization
  configs.headers = {...configs.headers, 
    ['Authorization'] : `Bearer ${getStore(ACCESS_TOKEN)}`,
    ['TokenCybersoft'] : TOKEN_CYBERSOFT
  }

  return configs;

}, (err) => {
  // cau hinh err 
  return Promise.reject(err);
})
