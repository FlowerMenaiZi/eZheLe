<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p>——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
<!--    <Copyright/>-->
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";


  export default {
    name: "SellerAdmin",
    components:{
      HeaderLogo,
      Copyright
    },
    data(){
      return{
        befUrl:''
      }
    },
    mounted() {
      if (!document.cookie){
        this.$router.push('/seller')
      }
    },

  }
</script>

<style scoped>
  p{
    color: #fff;
  }
</style>