// 定义一个接口地址
let beasURL;

// 判断属于那种环境中,去选择加载地址
// 使用跨域才需要这种方法
switch (process.env.NODE_ENV) {
  case 'development':
    beasURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    beasURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'production':
    beasURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    beasURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default {
  beasURL,
};
