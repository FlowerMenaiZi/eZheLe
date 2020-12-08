<template>
  <div id="app">
    <Header v-show="isShowH"  :province="province" :city="city" />
    <HeaderLogo v-show="isShow"></HeaderLogo>
   <keep-alive exclude="SearchRes"><router-view/></keep-alive>
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
        letterStart:[],
        letterCity: {},
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
          // this.$bus.$emit('updataCode',successRes.adcode)
        },
        failureRes => {                        //failure(data)方法
          console.log(failureRes)
        },
        "https://restapi.amap.com/",
      )
      if (!localStorage.getItem('letterStart')){
        this.$api.get(
          '/index/index/addressPy',
          {},
          {},
          success => {
            console.log(success);
            for (let index in success.data) {
              this.letterStart.push(index)
              console.log(index,success.data[index]);
              this.letterCity[index] = []
              for (let item in success.data[index]){
                console.log(success.data[index][item].cri_short_name);
                this.letterCity[index].push(success.data[index][item].cri_short_name)
              }
            }
            localStorage.setItem('letterStart',JSON.stringify(this.letterStart))
            localStorage.setItem('letterCity',JSON.stringify(this.letterCity))
          },
          failureRes => {
          }
        )
      }
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
          case "/mine":
            this.isShow = false
            this.isShowH = true
            break;
        }
      }
    },
  }
</script>

<style>
  html{
    font-size: 14px;
  }
  table{
    border-collapse: collapse;
  }
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
