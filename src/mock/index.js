const mock = true;

// import 和 require的区别
// import是预加载的，也就是说页面一开始就开始加载，就会被写入内存中；require是执行到这条语句才开始加载的
if (mock) {
  // eslint-disable-next-line global-require
  require('./api');
}
