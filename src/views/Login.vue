<template>
  <div>
    <b-container>
      <b-row class="text-right" align-h="center">
        <b-col cols="6">
          <b-input-group prepend="用户名" class="mt-5">
            <b-form-input
              id="input-live"
              v-model="userName"
              :state="userNameState"
              placeholder="用户名不能为空"
            ></b-form-input>
          </b-input-group>
          <b-input-group prepend="密码" class="mt-3">
            <b-form-input
              :type="'password'"
              v-model="userPassword"
              :state="userPasswordState"
              placeholder="密码不能少于6位"
            ></b-form-input>
          </b-input-group>
          <b-button class="mt-4" size="md" variant="success" @click="confirmLogin()">登录</b-button>
          <b-button class="mt-4 ml-2" size="md" variant="danger" @click="resetInputContent()">重置</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    userNameState() {
      return this.userName.length > 0 ? true : false;
    },
    userPasswordState() {
      return this.userPassword.length >= 6 ? true : false;
    }
  },
  data() {
    return {
      userName: "",
      userPassword: ""
    };
  },
  methods: {
    confirmLogin(){
      //登录表单提交
    },
    resetInputContent(){
      //重置表单内容
      this.userName = "",
      this.userPassword = ""
    }
  }
};
</script>