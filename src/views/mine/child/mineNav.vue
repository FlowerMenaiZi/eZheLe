<template>
  <div class="mineNav">
    <div class="userName">
      <p>顾 梦晨 女士</p>
    </div>
    <div class="aboutMe">
      <div class="mySet">
        <div>
          <img src="~assets/icon/account-fill.png" alt="">
          我的设置
        </div>
        <p><router-link to="/mine">个人信息</router-link></p>
      </div>
      <div class="mySet">
        <div>
          <img src="~assets/icon/New user zone-fill.png" alt="">
          我的订单
        </div>
        <p>待收货</p>
        <p>待评价</p>
      </div>
      <div class="mySet">
        <div>
          <img src="~assets/icon/collection-fill.png" alt="">
          历史店铺
        </div>
        <p>收藏店铺</p>
        <p>(你关注的店铺)</p>
      </div>
    </div>
    <div class="aboutMe">
      <div class="myMoney">
        <div>
          <img src="~assets/icon/qian.png" alt="">
          我的资产
        </div>
        <p>(红包和代金券)</p>
      </div>
      <div class="myMoney">
        <div>
          <img src="~assets/icon/house.png" alt="">
          收货地址
        </div>
      </div>
      <div class="myMoney">
        <div>
          <img src="~assets/icon/dianpu.png" alt="">
          店铺入驻
        </div>
      </div>
    </div>
    <div class="aboutMe">
      <div class="logout">
        <p>退出登入</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mineNav",
    props:{
      witchActive:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
  .mineNav {
    width: 250px;
    background: #fff;
    height: 870px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
    padding: 30px 30px;
  }

  .aboutMe {
    margin-top: 30px;
    border-top: 1px solid #ddd;
  }

  .mySet,.myMoney {
    padding-top: 30px;
    margin-bottom: 30px;
    width: 100%;
  }

  .mySet img {
    width: 15%;
    vertical-align: text-bottom;
    margin-right: 5px;
  }
  .myMoney img{
    width: 10%;
    vertical-align: text-bottom;
    margin-right: 14px;
  }
  .mySet p,.myMoney p {
    margin-top: 15px;
    text-indent: 36px;
    font-size: 12px;
  }
  .logout{
    padding-top: 30px;
    padding-left: 10px;
  }
  .logout p{
    text-decoration: underline;
  }
</style>