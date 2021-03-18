export default{
    updateSigning(state){
        state.isLogin = true;
        var storage=window.localStorage;
        storage.isLogin = state.isLogin
        // 在本地存储登录的 用户名 和 登录状态
        storage.username = this.userName;
      },
    loadingTime(state,time){
      state.loadingTime = time
    },
    updataUser(state,user){
      state.user = [].concat(user);
    }
}