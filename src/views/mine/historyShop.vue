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
          <p class="title">历史店铺</p>
          <p class="title">以下是您点击过的店铺</p>
          <div class="businessItem disf" v-for="(item, index) in history" :key="index">
            <div class="businessImg"><img src="~assets/image/sousiround.png" alt=""></div>
            <div class="businessInfo">
              <div class="disf info" style="justify-content: space-between;">
                <p>{{item.businessName}}</p>
                <span style="color: #999">{{item.distance}}</span>
              </div>
              <div class="disf info" style="align-items: center">
                <div class="disf" style="align-items: center;margin-right: 10px;width: 15%;" >
                  <img  :src="star(item.star)" alt="" style="margin-right:5px;width: 100%;">
<!--                  v-for="(item,index) in 5"-->
                </div>
                <p>人均¥<span>{{item.price}}</span></p>
              </div>
              <div class="info">
                <p>{{item.classify}}</p>
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

  import star3 from "assets/icon/sanxing.png"
  import star4 from "assets/icon/sixing.png"
  import star5 from "assets/icon/wuxing.png"
  export default {
    name: "history",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
    data(){
      return{
        history:[
          {
            'businessId':'1',
            'businessName':'寿司先森（石岐店）',
            'distance':'4.6km',
            'star':'4',
            'price':'20.0',
            'classify':'寿司'
          },
          {
            'businessId':'2',
            'businessName':'炸炸汉堡（南朗店）',
            'distance':'1.2km',
            'star':'3',
            'price':'16.0',
            'classify':'西式快餐/汉堡'
          },
          {
            'businessId':'3',
            'businessName':'鳄梨叔叔（石岐店）',
            'distance':'2.3km',
            'star':'5',
            'price':'22.0',
            'classify':'快餐简餐'
          },
          {
            'businessId':'4',
            'businessName':'July七月中西餐厅（石岐店）',
            'distance':'3.1km',
            'star':'5',
            'price':'18.0',
            'classify':'中餐/西餐'
          },
        ]
      }
    },
    computed:{
      star(){
        return (star)=>{
          switch (star) {
            case "3":
              return star3
            case "4":
              return star4
            case "5":
              return star5
          }
        }
      }
    }
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

  .businessItem {
    width: 100%;
    padding: 30px 0;
    border-top: 1px solid #ccc;
  }

  .businessItem .businessImg img {
    width: 100%;
  }

  .businessItem .businessInfo{
    width: 80%;
    font-size: 14px;
    margin-left: 40px;
  }
  .businessItem .businessInfo .info{
    margin-bottom: 20px;
  }
  .businessItem .businessInfo img{
    width: 100%;
  }
  .businessItem .businessInfo p{
    font-size: 16px;
    color: #999;
  }
</style>