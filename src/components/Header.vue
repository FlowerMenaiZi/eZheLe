<template>
  <div id="header_link">
    <div class="hLink disf">
      <div class="hLink-left disf">
        <p class="address">当前地区：
          {{selectPro?proV(this.selectPro):proV(this.province)}}
          {{selectCity?citY(this.selectCity):citY(this.city)}}
          <router-link to="/selectpos">【切换】</router-link>
        </p>
        <p><router-link to="/login">登入</router-link>/<router-link to="/register">注册</router-link></p>
      </div>
      <div class="hLink-right">
        <ul class="disf">
          <li><router-link to="/index" :class="{selectHeader:isIndex}">首页</router-link></li>
          <li><router-link to="/mine" :class="{selectHeader:isMine}">个人中心</router-link></li>
          <li><router-link to="/cart" :class="{selectHeader:isCart}">购物车</router-link></li>
          <li><router-link to="/seller">卖家登录</router-link></li>
          <li><router-link to="/collection" :class="{selectHeader:isColl}">我的收藏</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        headerPath:'',
        isIndex:false,
        isMine:false,
        isCart:false,
        isColl:false,
        selectPro:null,
        selectCity:null,
      }
    },
    props:{
      province:{
        type:String
      },
      city:{
        type:String
      }
    },
    computed:{
      proV(){
       return (proV)=>{
         if (proV.length === 2){
           return ''
         }else{
           return proV.slice(0,proV.length-1)
         }
       }
      },
      citY(){
       return (citY)=>{
         return citY.slice(0,citY.length-1)
       }
      }
    },
    mounted() {
      this.$bus.$on('updateData', (content)=>{
        this.selectPro = content.province
        this.selectCity = content.city
      });
    },
    beforeDestroy () {
      this.$bus.$off('updateData');
    },
    watch: {
      $route(to, from) {
        this.headerPath = to.path
        this.isIndex = false
        this.isMine = false
        this.isCart = false
        this.isColl = false
        switch (this.headerPath) {
          case "/index":
            this.isIndex = true
            break;
          case "/mine":
            this.isMine = true
            break;
          case "/cart":
            this.isCart = true
            break;
          case "/collection":
            this.isColl = true
            break;
        }
      }
    },
  }
</script>

<style scoped>
  #header_link {
    width: 100%;
    background: #fff;
    height: 40px;
    font-size: 13px;
    min-width: 1200px;
  }

  #header_link .hLink {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  #header_link .hLink .hLink-left .address {
    margin-right: 20px;
  }

  #header_link .hLink .hLink-left .address a {
    color: #ffab36;
  }

  #header_link .hLink .hLink-right {
    width: 40%;
  }

  #header_link .hLink .hLink-right ul li {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }

  #header_link .hLink .hLink-right ul li a {
    width: 100%;
    display: block;
  }

  #header_link .hLink .hLink-right ul li a:hover {
    color: #ffab36;
  }
  .selectHeader{
    color: #ffab36 !important;
  }
</style>