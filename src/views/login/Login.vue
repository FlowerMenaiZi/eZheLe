<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p>——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <usePhone/>
    <Copyright class="copyright"/>
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  import usePhone from "./child/usePhone";
  import Copyright from "components/Copyright";
  export default {
    name: "Login",
    components:{
      HeaderLogo,
      usePhone,
      Copyright
    }
  }
</script>

<style scoped>
  p{
    color: #fff;
  }
  .copyright{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>