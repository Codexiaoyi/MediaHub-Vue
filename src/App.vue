<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">主页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/file">文件</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>
    <router-view />

    <global-uploader></global-uploader>
  </div>
</template>

<script>
import globalUploader from "@/components/globalUploader.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    globalUploader
  },
  computed: {},
  created() {},
  watch: {}
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #aaaaaa;
}

#nav {
  padding: 10px;
  background: #3c4245;
  text-align: center;
}

a {
  margin-left: 20px;
  font-weight: bold;
  color: #ecfcff;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
