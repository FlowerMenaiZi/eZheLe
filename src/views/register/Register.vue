<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p>——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <Register titleInfo="注册" endBtnText="注册" :agree="isAgree">
      <div class="agree" slot="agree">
        <input type="checkbox" name="agree" @click="agreeClick" :checked="isAgree" >
        <p>我已阅读并接受<span>个人信息收集声明</span>以及<span>网站使用和销售条款</span></p>
      </div>
    </Register>
    <Copyright class="copyright"></Copyright>
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Register from "components/Register";

  export default {
    name: "register",
    data() {
      return {
        isAgree: false
      }
    },
    components: {
      HeaderLogo,
      Copyright,
      Register
    },
    methods: {
      agreeClick() {
        this.isAgree = !this.isAgree
      },
    }
  }
</script>

<style scoped>
  p {
    color: #fff;
  }

  .copyright {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>