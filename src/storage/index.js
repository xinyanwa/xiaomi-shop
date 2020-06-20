/**
 * 封装storage
 */
// 创建数据库名称
const STORAGE_KEY = 'xiaomi';

export default {
  // 设置数据库数据，如果有moduleName就会写入到名字下面，没有就会直接返回并且设置到数据库中
  setItem(key, value, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      val[key] = value;
      this.setItem(moduleName, val);
    } else {
      const val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取数据库中某一个值，没有moduleName就会去数据库中直接获取，有就会去下级目录获取
  getItem(key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  // 获取整个数据库，转换为json数据格式
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  // 清除数据库，没有moduleName就会直接删除下面的信息，有模板会对应删除模板下的信息
  clear(key, moduleName) {
    const val = this.getStorage();
    if (moduleName) {
      delete val[moduleName][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  },
};
