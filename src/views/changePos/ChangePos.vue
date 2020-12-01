<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p class="header-logo">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  export default {
    name: "ChangePos",
    components:{
      HeaderLogo,
    }
  }
</script>

<style scoped>
.header-logo{
  color: #fff;
}
</style>