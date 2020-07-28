/*
* 商城用的mutations
 */

export default {
  saveUserName(state, userName) {
    state.userName = userName;
  },
  saveCartCount(state, count) {
    state.count = count;
  },
};
