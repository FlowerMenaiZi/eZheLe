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
      <div class="rightContent" v-if="ordersItem.length === 0">
        <div class="defaultShow">
          <div class="title">
            <p>近期下单</p>
          </div>
          <div class="about">
            <p>目前您还没有下单的外卖</p>
          </div>
          <div class="goBuy">
            <button>立即下单</button>
          </div>
        </div>
      </div>
      <div class="haveOrder" v-else>
        <div class="orderContent">
          <div class="orderTitle">
            <div class="Title">
              <p>我的订单</p>
            </div>
            <div class="search disf">
              <p>以下是您的外卖订单</p>
              <a-input-search placeholder="搜索我的订单" style="width: 200px" @search="onSearch" class="searchInput" />
            </div>
          </div>
          <div class="ordersItem" v-for="(item, index) in ordersItem">
            <div class="disf busTitle">
              <p class="business">{{item.busName}}</p>
              <p class="orderStatus">{{orderStatus(item.orderStatus)}}</p>
            </div>
            <div class="disf busContent">
              <div class="disf">
                <img src="~assets/image/shutiao(3).png" alt="">
                <div style="margin-left: 20px">
                  <p class="commodity">{{item.orderContent}}</p>
                  <router-link to="/eval"> <p style="text-indent: 5px;">{{evaluation(item.orderStatus)}} ></p></router-link>
                </div>
              </div>
              <div>
                <p>共{{item.orderNum}}件</p>
              </div>
            </div>
            <div class="disf orderTime">
              <p>下单时间：{{item.orderCreateTime}}</p>
              <p>合计 ¥<span>{{item.orderPrice}}</span></p>
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
  import 'ant-design-vue/dist/antd.css';
  import mineNav from "./child/mineNav";
  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";
  export default {
    name: "myOrder",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
    data(){
      return{
        ordersItem:[],
      }
    },
    methods:{
      onSearch(value){
        console.log(value);
      }
    },
    mounted() {
      setTimeout(()=>{
        this.ordersItem=[
          {
            'busId':'1',
            'orderId':'111',
            'busName':'薯条盛宴（石岐店）',
            'orderStatus':'2',
            'orderContent':'《薯条欢乐》风味薯条+百事可乐',
            'orderNum':'1',
            'orderCreateTime':'2020-9-15 17:02',
            'orderPrice':'16.99'
          },
          {
            'busId':'2',
            'orderId':'111',
            'busName':'炸炸汉堡（南朗店）',
            'orderStatus':'4',
            'orderContent':'《巨无霸套餐》芝士巨无霸+可口可乐',
            'orderNum':'1',
            'orderCreateTime':'2020-9-10 15:32',
            'orderPrice':'20.99'
          },
          {
            'busId':'3',
            'orderId':'111',
            'busName':'鳄梨叔叔（东区店）',
            'orderStatus':'2',
            'orderContent':'《鳄梨套餐》牛油果鸡蛋吐司',
            'orderNum':'1',
            'orderCreateTime':'下单时间：2020-9-9 12:29',
            'orderPrice':'14.99'
          },
        ]
      },2000)
    },
    computed:{
      orderStatus() {
        return (index) => {
          switch (index) {
            case '1':
              return '已完成'    //已评价
            case '2':
              return '已完成'   //未评价
            case '3':
              return '未完成'
            case '4':
              return '已取消'
          }
        }
      },
      evaluation() {
        return (index) => {
          switch (index) {
            case '1':
              return '再次购买'
            case '2':
              return '去评价'
            case '3':
              return '查看订单'
            case '4':
              return '重新购买'
          }
        }
      },
    }
  }
</script>

<style scoped>
  .mineTitle {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .mineContent {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
  }
  .rightContent {
    width: 76%;
    margin-left: 40px;
  }
  .defaultShow {
    width: 100%;
    height: 230px;
    background: #fff;
    padding: 30px 40px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
  }

  .defaultShow .title {
    width: 100%;
    height: 70px;
    font-size: 18px;
  }

  .defaultShow .about {
    height: 70px;
  }
  .defaultShow .goBuy{
    text-align: right;
  }
  .defaultShow .goBuy button{
    width: 80px;
    height: 30px;
    background: #FFAB36;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline: none;
  }

  .haveOrder{
    width: 76%;
    margin-left: 40px;
  }
  .orderContent{
    width: 100%;
    background: #fff;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
    padding: 30px 40px;
  }
  .orderTitle .Title{
    width: 100%;
    height: 50px;
    font-size: 16px;
  }
  .orderTitle .search{
    height: 50px;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
  }
  .ordersItem{
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid #ddd;
    margin-top: 30px;
  }
  .ordersItem .busTitle{
    height: 50px;
    justify-content: space-between;
    align-items: center;
  }
  .ordersItem .busTitle .business{
    font-size: 16px;
  }
  .ordersItem .busTitle .orderStatus{
    color:#999999;
    font-size: 18px;
  }
  .ordersItem .busContent{
    padding: 20px 0;
    align-items: center;
    justify-content: space-between;
  }
  .ordersItem .busContent img{
    width: 35%;
  }
  .ordersItem .busContent div:nth-child(1){
    align-items: center;
    width: 50%;
  }
  .ordersItem .busContent div:nth-child(1) p.commodity{
    margin-bottom: 20px;
    color: #999;
  }
  .ordersItem .busContent div:nth-child(1) p{
    color: #FFAB36;
  }
  .ordersItem .orderTime{
    padding: 10px 0;
    justify-content: space-between;
  }
  .ordersItem .orderTime span{
    font-size: 16px;
  }

</style>