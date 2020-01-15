<template>
  <div id="app">
    <b-navbar id="nav">
      <b-navbar-brand>
        <img id="logo-img" src="@/assets/logo.png" class="d-inline-block align-center" alt="Kitten" />
        <b-nav-text id="logo-text">MediaHub</b-nav-text>
      </b-navbar-brand>
      <b-navbar-nav id="nav-route" class="align-center">
        <b-nav-item>
          <router-link to="/home">主页</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/about">批量上传</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/file">文件</router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <b-form-input id="search-input" size="sm" placeholder="搜索"></b-form-input>
        </b-nav-item>
        <b-nav-item>
          <b-button id="login" size="sm" @click="onChangeText()">{{loginString}}</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
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
#app {
  margin: 0%;
  padding: 0%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #aaaaaa;
}

#nav {
  width: 100%;
  height: 62px;
  background: #f2f2f2;
}

#logo-img {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  margin-left: 100px;
}

#logo-text {
  color: black;
  font-size: 24px;
}

#nav-route * {
  font-size: 16px;
  color: black;
}

#search-input {
  width: 200px;
  height: 28px;
  font-size: 12px;
}

#login {
  width: 90px;
  height: 28px;
  background: #8f5ca8;
  font-size: 12px;
  color: white;
  margin-right: 100px;
}
</style>
