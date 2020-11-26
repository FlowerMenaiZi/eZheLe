<template>
  <div id="header_link">
    <div class="hLink disf">
      <div class="hLink-left disf">
        <p class="address">当前地区：广东中山 <a href="#">【切换】</a></p>
        <p><router-link to="/login">登入</router-link>/<router-link to="/register">注册</router-link></p>
      </div>
      <div class="hLink-right">
        <ul class="disf">
          <li><router-link to="/index">首页</router-link></li>
          <li><router-link to="/mine">个人中心</router-link></li>
          <li><router-link to="/cart">购物车</router-link></li>
          <li><router-link to="/collection">我的收藏</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  #header_link {
    width: 100%;
    background: #fff;
    height: 40px;
    font-size: 13px;
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
</style>