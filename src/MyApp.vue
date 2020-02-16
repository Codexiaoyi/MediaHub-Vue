<template>
  <div id="app">
    <header>
      <div class="m-container">
        <div class="m-navbar">
          <img src="@/assets/logo.png" alt />
          <a class="m-logo" href>MediaHub</a>
          <label class="m-collapse-button" for="toggle-nav">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </label>
          <input id="toggle-nav" type="checkbox">
          <div class="m-collapse">
            <ul class="m-links">
              <li>
                <router-link to="/home">主页</router-link>
              </li>
              <li>
                <router-link to="/upload">批量上传</router-link>
              </li>
              <li>
                <router-link to="/file">文件</router-link>
              </li>
            </ul>
            <div class="m-search">
              <input class="m-search-input" type="text" placeholder="搜索" />
              <button>
                <i class="fas fa-search"></i>
              </button>
            </div>
            <button class="m-login" @click="onChangeText()">{{loginString}}</button>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
//import globalUploader from "@/components/globalUploader.vue";
import store from "../src/store/index.js";
import Event from "../src/Event.js";

export default {
  name: "app",
  data() {
    return {
      loginString: store.state.ma && store.state.token ? "登出" : "登录/注册"
    };
  },
  methods: {
    onChangeText() {
      if (store.state.ma && store.state.token) {
        window.localStorage.removeItem("Token");
        window.localStorage.removeItem("M_A");
        this.loginString = "登录/注册";
        this.$router.push({ path: "/login" });
      } else {
        //this.$router.push({ path: "/" });
      }
    }
  },
  components: {},
  computed: {},
  created() {
    Event.$on("notifyLoginState", state => {
      if (state === "loginSuccess") {
        this.loginString = "登出";
        this.$router.push({ path: "/" });
      }
    });
  },
  watch: {}
};
</script>

<style>
@import url("assets/css/myapp.css");
</style>
