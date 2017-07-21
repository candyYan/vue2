<template>
  <div class="login_container">
    <head-top :head-title="loginWay ? '登录' : '密码登录'" goBack="true">
      <div slot="changelogin" @click="changeLoginWay" class="change_login">{{ loginWay ? '密码登录' : '短信登录' }}</div>
    </head-top>
    <form class="login_form" v-if="loginWay">
      <section>test</section>
    </form>
    <form class="login_form" v-else>
      <section class="input_container">
        <input type="text" placeholder="账号" v-model.lazy="userAccount" >
      </section>
      <section class="input_container">
        <input type="password" placeholder="密码" v-model="passWord">
        <div class="button_switch" :class="{change_to_right: showPassword}">
          <div class="circle_button" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
        <div class="img_change_img">
          <img v-show="captchaCodeImg" :src="captchaCodeImg" alt="captch code img">
          <div class="change_img">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="login_tips">注册过的用户可凭账号密码登录</p>
    <div class="login_container">登录</div>
    <router-link to="/forget" class="to_forget" v-if="!loginWay">重置密码？</router-link>
    <alert-tip v-if="showAlert" :showHide="showAlert" :alertText="alertText" @closeTip="closeTip"></alert-tip>
  </div>
</template>

<script>
  import HeadTop from '../../components/Head.vue'
  import AlertTip from '../../components/AlertTip.vue'
  export default {
    components: {HeadTop, AlertTip},
    data() {
      return {
        loginWay: false,
        showPassword: false,
        showAlert: true,
        userAccount: null,
        passWord: null,
        captchaCodeImg: null,
        codeNumber: null,
        alertText:null
      }
    },
    methods: {
      changeLoginWay() {
        this.loginWay = !this.loginWay;
      },
      changePassWordType() {
        this.showPassword = !this.showPassword;
      },
      closeTip() {
        this.showAlert = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin";
  .login_container {
    padding-top: 1.95rem;
    p, span, input {
      font-family: Helvetica Neue,Tahoma,Arial;
    }
  }
  .change_login {
    position: absolute;
    @include ct;
    right:0.75rem;
    @include sc(0.7rem, #fff);
  }
  .login_form {
    background-color: #fff;
    margin-top: 0.6rem;
    .input_container {
      display: flex;
      justify-content: space-between;
      padding:0.6rem 0.8rem;
      input {
        @include sc(0.7rem, #666);
      }
      buttom {}
    }
  }
</style>
