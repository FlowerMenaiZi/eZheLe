<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p class="headerP">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <Register titleInfo="找回密码" endBtnText="确定" @getUserName="getUserName" :phone="phone" :isForget="isForget">
      <p slot="desc">如您忘记饿着了的帐户，使用本页找回密码，系统将帮您修改您的官网密码。</p>
      <div slot="phone">
        <label for="phone">电话号码</label>
        <input type="text" id="phone" placeholder="输入电话号码"  ref="phone" @input="changePhone">
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
    name: "Forget",
    components: {
      HeaderLogo,
      Copyright,
      Register
    },
    data(){
      return{
        phone:'',
        isForget:true
      }
    },
    methods:{
      getUserName(){
        this.phone = this.$refs.phone.value
      },
      changePhone(){
        this.phone = this.$refs.phone.value
      }
    }
  }
</script>

<style scoped>
  .headerP {
    color: #fff;
  }

  .copyright {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>