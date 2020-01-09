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
          <b-button id="login" size="sm">登录/注册</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
//import globalUploader from "@/components/globalUploader.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
  computed: {},
  created() {},
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
