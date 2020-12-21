<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p style="color: #fff">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <div class="mineTitle">
      <p>我的账号 >>></p>
    </div>
    <div class="mineContent disf">
      <mineNav></mineNav>
      <div class="rightContent">
        <div class="orderContent">
          <p class="title">我的资产</p>
          <p class="title">以下是您的红包和代金券</p>
          <div class="disf money">
            <p>余额：¥ <span>625331</span></p>
            <p>代金券：<span>3</span> 个</p>
          </div>
          <div class="couponItems">
            <div class="disf noCoupon coupon" id="coupon">
              <!--              <div>-->
              <!--                <img src="" alt="">-->
              <!--              </div>-->
              <div class="amount">
                <p>¥<span>8</span></p>
                <p>代金券</p>
              </div>
              <div class="desc">
                <p>外卖无门槛券</p>
                <p>还有9天到期</p>
                <p>使用规则</p>
              </div>
              <div class="use">
                <p>立即使用 ></p>
              </div>
            </div>
            <div class="disf coupon">
              <div class="busImg">
                <img src="~assets/image/shutiao(3).png" alt="">
              </div>
              <div class="amount">
                <p>¥<span>10</span></p>
                <p>代金券</p>
              </div>
              <div class="desc">
                <p>外卖商家券：薯条盛宴（石岐店）</p>
                <p>2020-12-31 11:30到期</p>
                <p>使用规则</p>
              </div>
              <div class="use">
                <p>立即领取 ></p>
              </div>
            </div>
            <div class="disf coupon">
              <div class="busImg">
                <img src="~assets/image/egground.png" alt="">
              </div>
              <div class="amount">
                <p>¥<span>5</span></p>
                <p>代金券</p>
              </div>
              <div class="desc">
                <p>外卖商家券：鳄梨叔叔（石岐店）</p>
                <p>2020-12-31 21:20到期</p>
                <p>使用规则</p>
              </div>
              <div class="use">
                <p>立即领取 ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import mineNav from "./child/mineNav";
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";

  export default {
    name: "balance",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
  }
</script>

<style scoped>
  .mineContent {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .mineTitle {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .rightContent {
    width: 76%;
    margin-left: 40px;
  }

  .orderContent {
    width: 100%;
    background: #fff;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
    padding: 30px 40px;
  }

  .orderContent p.title:nth-child(1) {
    font-size: 18px;
  }

  .orderContent p.title {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .orderContent .money {
    height: 100px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    align-items: center;
    color: #FFAB36;
    font-size: 20px;
  }

  .orderContent .money span {
    font-size: 24px;
  }

  .orderContent .couponItems {
    width: 100%;
  }
  .orderContent .couponItems #coupon{
    width: 50%;
  }
  .orderContent .couponItems .coupon,.orderContent .couponItems .noCoupon {
    background: #FFFFFF;
    box-shadow: 0 3px 20px 8px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    padding: 20px 20px;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
  }

  .orderContent .couponItems .coupon div.amount {
    text-align: center;
    color: #FFAB36;
    font-size: 18px;
  }
  .orderContent .couponItems .coupon div.busImg{
    width: 20%;
  }
  .orderContent .couponItems .coupon div.busImg img {
    width: 100%;
  }
  .orderContent .couponItems .coupon div.amount span {
    font-weight: bold;
    font-size: 30px;
  }

  .orderContent .couponItems .coupon div.desc {
    font-size: 18px;
  }
  .orderContent .couponItems .coupon div.desc p:nth-child(1){
    color: #999999;
  }
  .orderContent .couponItems .coupon div.desc p:nth-child(2){
    color:#FE6262;
    margin: 10px 0;
  }
  .orderContent .couponItems .coupon div.desc p:nth-child(3){
    color:#999999;
    opacity: .5;
  }
  .orderContent .couponItems .coupon div.use{
    margin-left: 40px;
    color: #999999;
    cursor: pointer;
  }
</style>