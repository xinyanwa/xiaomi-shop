import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import env from '../env';

Vue.use(VueAxios, axios);

const serve = axios.create({
  // 根据前端的跨域方式做调整
  baseURL: env.beasURL,
  // baseURL: '/api',
  // 设置超时时间
  timeout: 5000,
});

// 接口错误拦截
axios.interceptors.respose.use((response) => {
  const res = response.data;
  let data;
  if (res.status === 0) {
    data = res.data;
  } else if (res.status === 10) {
    window.location.href = '/region';
  } else {
    // function alert( res.msg );
    alert(res.msg);
    // console.log();
  }
  return data;
});

export default serve;
