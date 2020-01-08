<template>
  <div id="app">
    <b-navbar id="nav" toggleable="sm">
      <b-navbar-brand id="logo">
        <img id="logoImg" src="@/assets/logo.png" class="d-inline-block align-center" alt="Kitten" />
        <b-nav-text id="logotext">MediaHub</b-nav-text>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="align-center">
          <b-nav-item>
            <router-link to="/home">主页</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">关于</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/file">文件</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-form-input id="searchInput" size="sm" placeholder="搜索"></b-form-input>
          </b-nav-item>
          <b-nav-item>
            <b-button id="login" size="sm">登录/注册</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
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

#logotext {
  color: black;
  font-size: 24px;
}

#logoImg {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

#nav {
  width: 100%;
  height: 62px;
  background: #f2f2f2;
}

#nav-collapse * {
  color: black;
  font-size: 14px;
}

#searchInput {
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
}
</style>
