<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p style="color: #fff">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <div class="container">
      <curLocation class="curLocation">
        <span slot="first">首页></span>
        <span slot="second">购物车</span>
      </curLocation>
      <div class="content disf">
        <div class="contentLeft">
          <div class="cartTitle">
            <p>购物车</p>
          </div>
          <div>
            <div>
              <p>喜茶利和店</p>
            </div>
            <div>
              <label><input type="checkbox"> 全选</label>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
<!--    <Copyright/>-->
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import curLocation from "components/curLocation";
  export default {
    name: "cart",
    components:{
      HeaderLogo,
      Copyright,
      curLocation
    }
  }
</script>

<style scoped>
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .curLocation {
    background: #fff;
    width: 100%;
    height: 35px;
    line-height: 35px;
    margin-top: 20px;
    padding: 0 20px;
    box-shadow: 0 2px 10px 4px rgba(0, 0, 0, 0.06);
  }
  .content{
    margin-top: 10px;
  }
  .contentLeft{
    width: 79%;
    background: #fff;
    box-shadow: 0 2px 10px 4px rgba(0, 0, 0, 0.06);
    height: 200px;
  }
  .content .cartTitle{
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
  }
  .content .cartTitle p{
    font-size: 25px;
    color: #FFAB36;
    padding: 20px;
    width: 25%;
    text-align: center;
    border-bottom: 2px solid #FFAB36;
  }
</style>