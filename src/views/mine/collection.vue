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
          <p class="title">收藏店铺</p>
          <p class="title">以下是您收藏过的店铺</p>
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
                </div>
              </div>
              <div class="info">
                <p>起送 ¥<span>{{item.distribution}}</span> {{disMoney(item.disMoney)}} 饿着了专送</p>
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
    name: "collection",
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
            'distribution':'20',
            'disMoney':'0'
          },
          {
            'businessId':'2',
            'businessName':'炸炸汉堡（南朗店）',
            'distance':'1.2km',
            'star':'3',
            'distribution':'16',
            'disMoney':'0'
          },
          {
            'businessId':'3',
            'businessName':'鳄梨叔叔（石岐店）',
            'distance':'2.3km',
            'star':'5',
            'distribution':'22',
            'disMoney':'3.5'
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
      },
      disMoney(){
        return (money)=>{
          switch (money) {
              case '0':
                return '免配送费'
              default:
                return "配送费 ¥"+money
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