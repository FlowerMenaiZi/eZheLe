<template>
  <div>
    <HeaderLogo :isAdminHeader="true">
      <div slot="search">
        <p class="search_p">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <div class="admin">
      <div class="adminRightNav">
        <div class="navTop disf">
          <div>
            <img src="~assets/image/touxiang.png" alt="">
          </div>
          <div>
            <p>店铺管理员</p>
            <span>退出</span>
          </div>
        </div>
        <div class="navContent">
          <p class="navTitle">菜单</p>
          <div class="businessNav" @click="businessClick">
            <img src="~assets/icon/category.png" alt="">
            <span :class="{choice:isChoice}">店铺信息管理</span>
          </div>
          <div class="goodsNav" :class="{choiceItem:showGoodsContent}" @click="goodsNavClick">
            <img src="~assets/icon/category.png" alt="">
            <span>商品信息管理
            <svg t="1606873236385" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3450" width="16" height="16" v-show="showGoodsArrow"><path d="M294.13376 512c0-13.70112 5.23264-27.40224 15.6672-37.84704l328.704-328.69376c20.91008-20.91008 54.80448-20.91008 75.70432 0 20.89984 20.89984 20.89984 54.79424 0 75.70432L423.36256 512l290.83648 290.83648c20.89984 20.89984 20.89984 54.80448 0 75.70432-20.89984 20.91008-54.79424 20.91008-75.70432 0l-328.704-328.69376C299.35616 539.40224 294.13376 525.70112 294.13376 512z" p-id="3451" fill="#515151"></path></svg>
            <svg t="1606873531533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4305" width="16" height="16" v-show="!showGoodsArrow"><path d="M959.429379 343.214852 890.590548 274.378068 511.268336 653.699256 131.944078 274.378068 63.105247 343.214852 501.1857 781.294282 521.348925 781.294282Z"
                                                                                                                                                                                           p-id="4306" fill="#515151"></path></svg>
          </span>
            <ul class="goodsUl">
              <li :class="{choice:goodsLiChoice}" @click="goodsChoiceLi">商品分类</li>
              <li :class="{choice:!goodsLiChoice}" @click="goodsChoiceLiTwo">商品信息</li>
            </ul>
          </div>
          <div class="orderNav" @click="orderClick" :class="{choiceItem:showOrderContent}">
            <img src="~assets/icon/category.png" alt="">
            <span>订单管理
          <svg t="1606873236385" class="icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3450" width="16" height="16" v-show="showOrderArrow"><path d="M294.13376 512c0-13.70112 5.23264-27.40224 15.6672-37.84704l328.704-328.69376c20.91008-20.91008 54.80448-20.91008 75.70432 0 20.89984 20.89984 20.89984 54.79424 0 75.70432L423.36256 512l290.83648 290.83648c20.89984 20.89984 20.89984 54.80448 0 75.70432-20.89984 20.91008-54.79424 20.91008-75.70432 0l-328.704-328.69376C299.35616 539.40224 294.13376 525.70112 294.13376 512z"
                                                                                                                                                                                         p-id="3451" fill="#515151"></path></svg>
          <svg t="1606873531533" class="icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4305" width="16" height="16"  v-show="!showOrderArrow"><path
                  d="M959.429379 343.214852 890.590548 274.378068 511.268336 653.699256 131.944078 274.378068 63.105247 343.214852 501.1857 781.294282 521.348925 781.294282Z"
                  p-id="4306" fill="#515151"></path></svg>
          </span>
            <ul class="orderUl">
              <li :class="{choice:orderLiChoice}" @click="orderChoiceLi">订单查询</li>
              <li :class="{choice:!orderLiChoice}" @click="orderChoiceLiTwo">评价管理</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contentRight">
        <busiManage></busiManage>
      </div>
    </div>
    <Copyright class="copyright"/>
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";

  import busiManage from "./child/busiManage";


  export default {
    name: "SellerAdmin",
    components: {
      HeaderLogo,
      Copyright,
      busiManage
    },
    data() {
      return {
        befUrl: '',
        isChoice: true,                   //店铺信息管理默认选中
        showGoodsContent: false,          //是否显示商品信息管理
        showGoodsArrow: true,             //商品信息管理箭头指向
        goodsLiChoice:true,               //商品信息子元素选中状态
        showOrderContent:false,           //是否显示订单管理
        showOrderArrow: true,             //订单管理箭头指向
        orderLiChoice:true,               //订单管理子元素选中状态
      }
    },
    methods: {
      businessClick(){
        this.isChoice = true
        this.showGoodsContent = false
        this.showGoodsArrow = true
        this.showOrderContent = false
        this.showOrderArrow = true
      },
      goodsNavClick() {
        this.isChoice = false
        this.showGoodsContent = true
        this.showGoodsArrow = false
        this.showOrderContent = false
        this.showOrderArrow = true
      },
      goodsChoiceLi(){
        this.goodsLiChoice = true
      },
      goodsChoiceLiTwo(){
        this.goodsLiChoice = false
      },
      orderClick(){
        this.isChoice = false
        this.showOrderContent = true
        this.showOrderArrow = false
        this.showGoodsContent = false
        this.showGoodsArrow = true
      },
      orderChoiceLi(){
        this.orderLiChoice = true
      },
      orderChoiceLiTwo(){
        this.orderLiChoice = false
      },
    },
    mounted() {
      if (!document.cookie) {
        this.$router.push('/seller')
      }
    },
  }
</script>

<style scoped>
  .search_p {
    color: #fff;
  }

  .icon {
    margin-left: 50px;
  }
  .admin{
    position: relative;
  }
  .icon2 {
    margin-left: 80px;
  }
  .adminRightNav {
    width: 280px;
    background: #fff;
    height: calc(100vh - 90px - 31px);
    box-shadow: 0 10px 10px #999999;
    overflow: hidden;
  }

  .navTop {
    width: 80%;
    margin: 20px auto;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 1px solid #DDD;
  }

  .navTop div:nth-child(2) {
    margin-left: 20px;
  }

  .navTop div p {
    margin-bottom: 20px;
  }

  .navTop div span {
    color: #999999;
    font-size: 14px;
    text-decoration: underline;
  }

  .navContent {
    width: 100%;
    margin: 80px 0;
  }

  .navTitle {
    padding: 0 35px;
  }

  .businessNav, .goodsNav, .orderNav {
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    overflow: hidden;
    padding-left: 30px;
  }

  .choiceItem {
    animation: changeH 0.2s ease-in forwards !important;
  }

  .businessNav img, .goodsNav img, .orderNav img {
    width: 14%;
    vertical-align: middle;
    margin-bottom: 5px;
    margin-right: 10px;
  }

  .businessNav span {
    display: inline-block;
    font-size: 20px;
  }

  .choice {
    color: #FFAB36;
  }

  .goodsUl,.orderUl {
    text-indent: 45px;
  }

  @keyframes changeH {
    to {
      height: 150px;
      background: #E6E6E6;
    }
  }
  .contentRight{
    width: 80%;
    position: absolute;
    top: 40px;
    left: 330px;
    box-shadow: 0 0 10px #999;
  }
  .copyright{
    position: fixed;
    bottom: 0;
  }
</style>