import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //初始化数据
    formDatas: null,
    token: window.localStorage.getItem('Token') ? window.localStorage.getItem('Token') : "",
    ma: window.localStorage.getItem('M_A') ? window.localStorage.getItem('M_A') : "",
  },
  mutations: {
    //改变state里面值得方法
    getFormData(state, data) {
      state.formDatas = data
    },
    saveToken(state, data) {
      state.token = data;
      window.localStorage.setItem("Token", data);//保存到本地
    },
    saveAmigo(state, data) {
      state.ma = data,
        window.localStorage.setItem("Amigo", data);//保存到本地
    }
  },
  actions: {
  },
  modules: {
  }
})
