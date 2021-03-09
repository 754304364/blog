export default{
    updateSigning(state){
        state.signing = true;
        var storage=window.localStorage;
        storage.signing = state.signing
        // 在本地存储登录的 用户名 和 登录状态
        storage.username = this.userName;
      },
    loadingTime(state,time){
      state.loadingTime = time
    }
}