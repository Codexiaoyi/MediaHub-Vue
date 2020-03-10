<template>
  <div id="app">
    <header>
      <div class="t-container">
        <div class="t-navbar">
          <img src="@/assets/logo.png" alt />
          <a class="t-logo" href>MediaHub</a>
          <label class="t-collapse-button" for="toggle-nav">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </label>
          <input id="toggle-nav" type="checkbox">
          <div class="t-collapse">
            <ul class="t-links">
              <li>
                <router-link to="/home">首页</router-link>
              </li>
              <!-- <li>
                <router-link to="/upload">批量上传</router-link>
              </li> -->
              <li>
                <router-link to="/file">文件</router-link>
              </li>
              <li>
                <router-link to="/album">相册</router-link>
              </li>
            </ul>
            <div class="t-search">
              <input class="t-search-input" type="text" placeholder="搜索" />
              <button>
                <i class="fas fa-search"></i>
              </button>
            </div>
            <button class="t-login" @click="onChangeText()">{{loginString}}</button>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import store from "../src/store/index.js";
import event from "../src/assets/js/event.js";

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
     event.$on("notifyLoginState", state => {
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
