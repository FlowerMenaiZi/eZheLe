<template>
  <div id="app">
    <Header v-show="isShowH"  :province="province" :city="city" />
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
        isShow: true,
        isShowH: true,
        province:'',
        city:'',
      }
    },
    mounted() {
      this.path = this.$route.path
      //获取用户当前位置
      this.$api.get(
        '/v3/ip',                           //url
        {},  //headers
        {"output":"json","key":"6eeea94cca86ed8d0c8cb9732ec4c07a"}, //params
        successRes => {                        //success(data)方法
          this.province = successRes.province
          this.city = successRes.city
          localStorage.setItem("adcode",successRes.adcode);
        },
        failureRes => {                        //failure(data)方法
          console.log(failureRes)
        },
        "https://restapi.amap.com/",
      )
    },
    watch: {
      $route(to, from) {
        this.path = to.path
        this.isShow = true
        this.isShowH = true
        switch (this.path) {
          case "/login":
            this.isShow = false
            this.isShowH = false
            break;
          case "/register":
            this.isShow = false
            this.isShowH = false
            break;
          case "/forget":
            this.isShow = false
            this.isShowH = false
            break;
          case "/selectpos":
            this.isShow = false
            break
          case "/seller":
            this.isShow = false
            this.isShowH = false
            break
          case "/admin":
            this.isShow = false
            this.isShowH = false
            break
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
