<template>
  <div>
    <b-container>
      <b-row class="text-right" align-h="center">
        <b-col cols="6">
          <b-input-group prepend="用户名" class="mt-5">
            <b-form-input
              id="input-live"
              v-model="userAccount"
              :state="userAccountState"
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
          <b-input-group prepend="邮箱" class="mt-3">
            <b-form-input
              :type="'email'"
              v-model="userEmail"
              aria-invalid="true"
              placeholder="请输入邮箱"
            ></b-form-input>
          </b-input-group>
          <b-button class="mt-4" size="md" variant="success" @click="confirmRegister()">确定</b-button>
          <b-button class="mt-4 ml-2" size="md" variant="danger" @click="resetInputContent()">重置</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAccount: "",
      userPassword: "",
      userEmail: ""
    };
  },
  computed: {
    userAccountState() {
      return this.userAccount.length > 0 ? true : false;
    },
    userPasswordState() {
      return this.userPassword.length >= 6 ? true : false;
    }
  },
  methods: {
    confirmRegister() {
      //注册表单提交
      if (
        this.userAccount == "" ||
        this.userPassword == "" ||
        this.userEmail == ""
      ) {
        alert("信息错误");
        return;
      }
      //登录请求
      this.$api.post(
        "user/register",
        {
          UserAccount: this.userAccount,
          Password: this.userPassword,
          Email: this.userEmail
        },
        r => {
          alert("注册成功");
        }
      );
    },
    resetInputContent() {
      //重置表单内容
      (this.userName = ""), (this.userPassword = ""), (this.userEmail = "");
    }
  }
};
</script>