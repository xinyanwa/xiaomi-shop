const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'));
  },
  devServer: {
    // 目标主机
    host: 'localhost',
    // 希望发布的端口号
    port: 8080,
    // proxy:{'/api':{}},代理器中设置/api,项目中请求路径为/api的替换为target
    // proxy: {
    //   '/api': {
    //     // 代理地址，这里设置的地址会代替axios中设置的baseURL
    //     target: 'https://www.imooc.com',
    //     // 如果接口跨域，需要进行这个参数配置
    //     changeOrigin: true,
    //     // pathRewrite方法重写url
    //     pathRewrite: {
    //       // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
    //       // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
    //       '/api': '',
    //     },
    //   },
    // },
  },
  css: {
    loaderOptions: {
      sass: {
        // @指向src目录
        prependData: `
                  @import '@/assets/css/config.scss';
                  @import '@/assets/css/mixin.scss';
                  @import '@/assets/css/reset.scss';  
            `,
      },
    },
  },
};
