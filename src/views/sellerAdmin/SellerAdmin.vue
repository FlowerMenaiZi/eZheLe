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
            <svg t="1606873531533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4305" width="16" height="16" v-show="!showGoodsArrow"><path d="M959.429379 343.214852 890.590548 274.378068 511.268336 653.699256 131.944078 274.378068 63.105247 343.214852 501.1857 781.294282 521.348925 781.294282Z" p-id="4306" fill="#515151"></path></svg>
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
              <li :class="{choice:orderChoice}" @click="orderChoiceLi">订单查询</li>
              <li :class="{choice:evaluateChoice}" @click="orderChoiceLiTwo">评价管理</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contentRight">
        <busiManage v-show="isChoice"/>
        <goodsManage v-show="showGoodsContent" :goodsItemInfo="goodsItemInfo" @showCover="showCover" @hiddenCover="hiddenCover" @addGoods="addGoods" @delGoods="delGoods" @changeUpOrLow="changeUpOrLow"/>
        <orderMange v-show="orderChoice" :ordersItemInfo="ordersItemInfo" @showCover="showCover" @hiddenCover="hiddenCover"/>
        <evaluateMange v-show="evaluateChoice" :evaluateInfo="evaluateInfo" @showCover="showCover" @hiddenCover="hiddenCover" @reply="reply"/>
      </div>
    </div>
    <div class="cover" v-show="isShowCover"></div>
    <Copyright class="copyright"/>
  </div>
</template>

<script>
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";

  import busiManage from "./child/busiManage";
  import goodsManage from "./child/goodsManage";
  import orderMange from "./child/orderMange";
  import evaluateMange from "./child/evaluateMange";


  export default {
    name: "SellerAdmin",
    components: {
      HeaderLogo,
      Copyright,
      busiManage,
      goodsManage,
      orderMange,
      evaluateMange
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
        orderChoice:false,                //订单管理子元素选中状态
        evaluateChoice:false,             //评价管理子元素选中状态
        isShowCover:false,                //是否显示遮盖层
        goodsItemInfo:[
          {
            'goodsId':'001',
            'goodsImg':'',
            'goodsName':'风味薯条*1 百事可乐*1',
            'classify':'套餐',
            'goodsPrice':'22',
            'goodsDesc':'多汁多肉，好吃到让你回味无穷',
            'upperTime':'2020-10-15',
            'isUpper':false,
            'isRecommend':true,
          },
          {
            'goodsId':'002',
            'goodsImg':'',
            'goodsName':'无骨鸡块',
            'classify':'小吃',
            'goodsPrice':'11',
            'goodsDesc':'多汁多肉，好吃无骨一口闷',
            'upperTime':'2020-10-14',
            'isUpper':false,
            'isRecommend':true,
          },
          {
            'goodsId':'003',
            'goodsImg':'',
            'goodsName':'深海鳕鱼堡',
            'classify':'汉堡',
            'goodsPrice':'15',
            'goodsDesc':'深海鳕鱼打造美味汉堡',
            'upperTime':'2020-10-16',
            'isUpper':true,
            'isRecommend':false,
          },
        ],
        ordersItemInfo:[
          {
            'orderId':'012',
            'orderName':'风味薯条*1 百事可乐*1',
            'orderStatus':1,
            'orderCreateTime':'2020-10-26',
            'buyerNotes':'多给一包番茄酱，谢谢！',
            'telBuyer':'13511223344',
            'buyerAddress':'广东省中山市东区技师学院',
            'orderPrice':20,
            'deliverGoodsStatus':1
          },
          {
            'orderId':'013',
            'orderName':'牛肉双层大芝士*1 橙汁*1',
            'orderStatus':1,
            'orderCreateTime':'2020-10-27',
            'buyerNotes':'',
            'telBuyer':'13511223344',
            'buyerAddress':'广东省中山市东区小学',
            'orderPrice':49,
            'deliverGoodsStatus':1
          },
          {
            'orderId':'014',
            'orderName':'风味薯条*1 百事可乐*1',
            'orderStatus':2,
            'orderCreateTime':'2020-10-27',
            'buyerNotes':'',
            'telBuyer':'13511223344',
            'buyerAddress':'广东省中山市东区大学',
            'orderPrice':20,
            'deliverGoodsStatus':2
          },
          {
            'orderId':'015',
            'orderName':'风味薯条*1 百事可乐*1',
            'orderStatus':3,
            'orderCreateTime':'2020-10-27',
            'buyerNotes':'',
            'telBuyer':'13511223344',
            'buyerAddress':'广东省中山市东区初中',
            'orderPrice':20,
            'deliverGoodsStatus':3
          },
        ],
        evaluateInfo:[
          {
            "orderId":'012',
            "orderName":"风味薯条*1 百事可乐*1",
            "orderTime":"2020-10-26",
            "orderScore":"5",
            "evaluate":"太好吃了，我没吃过这么好吃的薯条",
            "orderStatus":1,
            "myReply":"",
          },
          {
            "orderId":'013',
            "orderName":"牛肉双层大芝士*1 橙汁*1",
            "orderTime":"2020-10-27",
            "orderScore":"4.5",
            "evaluate":"下次还会再来购买的，很棒",
            "orderStatus":1,
            "myReply":"欢迎下次光临",
          },
          {
            "orderId":'014',
            "orderName":"风味薯条*1 百事可乐*1",
            "orderTime":"2020-10-28",
            "orderScore":"1",
            "evaluate":"太难吃了，送的东西还是有问题的",
            "orderStatus":1,
            "myReply":"亲，申请退款呕出来售后了解一下",
          },
          {
            "orderId":'015',
            "orderName":"炸鸡整只*1 奥尔良鸡翅一对*1 百事可乐*10",
            "orderTime":"2020-10-29",
            "orderScore":5,
            "evaluate":"太好吃了，我没吃过这么好吃的薯条",
            "orderStatus":1,
            "myReply":"",
          },
        ],
      }
    },
    methods: {
      changeUpOrLow(index){
        this.goodsItemInfo[index].isUpper = !this.goodsItemInfo[index].isUpper
      },
      delGoods(index){
        this.goodsItemInfo.splice(index,1)
      },
      addGoods(item){
        this.goodsItemInfo.push(item)
      },
      reply(info){
        this.isShowCover = false
        console.log(info);
        this.evaluateInfo[info[0]].myReply = info[1]
      },
      businessClick(){
        this.isChoice = true
        this.showGoodsContent = false
        this.showGoodsArrow = true
        this.showOrderContent = false
        this.showOrderArrow = true
        this.orderChoice = false
        this.evaluateChoice = false
      },
      goodsNavClick() {
        this.isChoice = false
        this.showGoodsContent = true
        this.showGoodsArrow = false
        this.showOrderContent = false
        this.showOrderArrow = true
        this.orderChoice = false
        this.evaluateChoice = false
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
        this.orderChoice = true
        this.evaluateChoice = false
      },
      orderChoiceLiTwo(){
        this.orderChoice = false
        this.evaluateChoice = true
      },
      showCover(){
        this.isShowCover = true
      },
      hiddenCover(){
        this.isShowCover = false
      }
    },
    mounted() {
      if (document.cookie.indexOf("admin=") == -1) {
        this.$router.push('/seller')
      }
    },
  }
</script>

<style scoped>
  .cover{
    width: 100vw;
    height: 100vh;
    background: rgba(19, 19, 19, .3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 80;
  }
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

  .businessNav span,.goodsNav span,.orderNav span {
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
    width: 75%;
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