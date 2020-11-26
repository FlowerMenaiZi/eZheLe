<template>
  <div id="app">
    <Header v-show="isShow"/>
    <HeaderLogo v-show="isShow"></HeaderLogo>
    <router-view/>
  </div>
</template>

<script>
  import Header from "components/Header";
  import HeaderLogo from "components/HeaderLogo";

  export default {
    name: 'App',
    components: {
      Header,
      HeaderLogo
    },
    data() {
      return {
        path: '',
        isShow: true
      }
    },
    mounted() {
      this.path = this.$route.path
    },
    watch: {
      $route(to, from) {
        this.path = to.path
        // console.log(this.path);
        if (this.path === '/login' || this.path === '/register' || this.path === '/forget') {
          this.isShow = false
        } else {
          this.isShow = true
        }
      }
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  input {
    outline: none;
  }

  ul {
    list-style: none;
  }

  body {
    background: #f7f7f7;
  }

  .disf {
    display: flex;
  }

  #app {
    width: 100%;
  }
</style>
