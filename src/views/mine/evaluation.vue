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
      <div class="haveOrder" v-if="selectEval.length !== 0">
        <div class="orderContent">
          <p style="font-size: 18px">
            评价外卖
          </p>
          <div class="disf" style="justify-content: space-between;align-items: center;margin: 30px 0;">
            <div style="width: 20%;">
              <img src="~assets/image/shutiao(3).png" alt="" width="100%">
            </div>
            <div v-for="(item,index) in selectEval" style="width: 75%;">
              <p>{{item.busName}}</p>
              <div class="disf" style="justify-content: space-between;margin: 20px 0">
                <p style="color: #999;">{{item.orderContent}}</p>
                <p>共<span>{{item.orderNum}}</span>件</p>
              </div>
              <div class="disf" style="justify-content: space-between">
                <p>下单时间：{{item.orderCreateTime}}</p>
                <p>合计¥ <span style="font-size: 18px;">{{item.orderPrice}}</span></p>
              </div>
            </div>
          </div>
          <div class="disf" style="width: 100%;align-items: center;">
            <div style="width: 40%;">
              <textarea
                      style=" resize: none;
                    width: 100%;
                    height: 150px;
                    border: 1px solid #D3D3D3;
                    box-shadow: 0 4px 21px 8px rgba(0, 0, 0, 0.03);
                    border-radius: 5px;
                    outline: none;
                    text-indent: 10px;"
                      placeholder="这次的外卖是不是很好吃呢？点评一下吧">
              </textarea>
            </div>
            <div style="width: 55%;margin-left: 40px">
              <div class="disf">
                <p>食品与描述相符</p>
                <div style="margin-left: 50px">
                  <img class="desc" src="~assets/icon/xingxing 2.png" @click="selDescStar(index)" style="margin-right: 5px" v-for="(item, index) in 5">
                </div>
              </div>
              <div class="disf" style="margin: 40px 0;">
                <p>店铺的服务态度</p>
                <div style="margin-left: 50px">
                  <img class="server" src="~assets/icon/xingxing 2.png" @click="selSerStar(index)" style="margin-right: 5px" v-for="(item, index) in 5">
                </div>
              </div>
              <div class="disf">
                <p>食品的新鲜程度</p>
                <div style="margin-left: 50px">
                  <img class="fresh" src="~assets/icon/xingxing 2.png" @click="selFreshStar(index)" style="margin-right: 5px" v-for="(item, index) in 5">
                </div>
              </div>
            </div>
          </div>
          <div style="width: 100%;text-align: center;margin: 20px 0 0 0;">
            <button style="width: 100px;height: 35px;outline: none;border: none;border-radius: 4px;margin-right: 20px;" @click="cancelEval">取消评论</button><button style="width: 100px;height: 35px;background: #FFAB36;outline: none;border: none;border-radius: 4px;color: #fff">发表评论</button>
          </div>
        </div>
      </div>
      <div class="haveOrder" v-else>
        <div class="orderContent">
          <div class="orderTitle">
            <div class="Title">
              <p>待评价</p>
            </div>
            <div class="search disf">
              <p>以下是您待评价的外卖</p>
              <a-input-search placeholder="搜索我的订单" style="width: 200px" @search="onSearch" class="searchInput"/>
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
                  <p style="text-indent: 5px;" @click="goEval(index)">{{evaluation(item.orderStatus)}} ></p>
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

  import star from "assets/icon/xingxing 1.png"
  import defaultStar from "assets/icon/xingxing 2.png"
  export default {
    name: "evaluation",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
    data() {
      return {
        ordersItem: [
          {
            'busId': '1',
            'orderId': '111',
            'busName': '薯条盛宴（石岐店）',
            'orderStatus': '2',
            'orderContent': '《薯条欢乐》风味薯条+百事可乐',
            'orderNum': '1',
            'orderCreateTime': '2020-9-15 17:02',
            'orderPrice': '16.99'
          },
          {
            'busId': '2',
            'orderId': '111',
            'busName': '炸炸汉堡（南朗店）',
            'orderStatus': '4',
            'orderContent': '《巨无霸套餐》芝士巨无霸+可口可乐',
            'orderNum': '1',
            'orderCreateTime': '2020-9-10 15:32',
            'orderPrice': '20.99'
          },
          {
            'busId': '3',
            'orderId': '111',
            'busName': '鳄梨叔叔（东区店）',
            'orderStatus': '2',
            'orderContent': '《鳄梨套餐》牛油果鸡蛋吐司',
            'orderNum': '1',
            'orderCreateTime': '下单时间：2020-9-9 12:29',
            'orderPrice': '14.99'
          }
        ],
        selectEval: [],
        descS:'',
        serverS:'',
        freshS:'',
      }
    },
    methods: {
      onSearch(value) {
        console.log(value);
      },
      goEval(index) {
        this.selectEval = []
        this.selectEval.push(this.ordersItem[index])
      },
      selDescStar(index){
        var descStar = document.getElementsByClassName('desc')
        for (let j = 0;j<descStar.length;j++){
          descStar[j].src = defaultStar
        }
        for (let i = 0;i<index+1;i++){
          descStar[i].src = star
        }
        this.descS = index+1
      },
      selSerStar(index){
        var serStar = document.getElementsByClassName('server')
        for (let j = 0;j<serStar.length;j++){
          serStar[j].src = defaultStar
        }
        for (let i = 0;i<index+1;i++){
          serStar[i].src = star
        }
        this.serverS = index+1
      },
      selFreshStar(index){
        var freshStar = document.getElementsByClassName('fresh')
        for (let j = 0;j<freshStar.length;j++){
          freshStar[j].src = defaultStar
        }
        for (let i = 0;i<index+1;i++){
          freshStar[i].src = star
        }
        this.freshS = index+1
      },
      cancelEval(){
        this.selectEval = []
        this.freshS = ''
        this.serverS = ''
        this.descS = ''
      }
    },
    mounted() {
      this.selectEval = []
      this.ordersItem = this.ordersItem.filter(n => n.orderStatus == '2')
    },
    computed: {
      orderStatus() {
        return (index) => {
          switch (index) {
            case '2':
              return '待评价'    //未评价
          }
        }
      },
      evaluation() {
        return (index) => {
          switch (index) {
            case '2':
              return '去评价'
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

  .haveOrder {
    width: 76%;
    margin-left: 40px;
  }

  .orderContent {
    width: 100%;
    background: #fff;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
    padding: 30px 40px;
  }

  .orderTitle .Title {
    width: 100%;
    height: 50px;
    font-size: 16px;
  }

  .orderTitle .search {
    height: 50px;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
  }

  .ordersItem {
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid #ddd;
    margin-top: 30px;
  }

  .ordersItem .busTitle {
    height: 50px;
    justify-content: space-between;
    align-items: center;
  }

  .ordersItem .busTitle .business {
    font-size: 16px;
  }

  .ordersItem .busTitle .orderStatus {
    color: #999999;
    font-size: 18px;
  }

  .ordersItem .busContent {
    padding: 20px 0;
    align-items: center;
    justify-content: space-between;
  }

  .ordersItem .busContent img {
    width: 35%;
  }

  .ordersItem .busContent div:nth-child(1) {
    align-items: center;
    width: 50%;
  }

  .ordersItem .busContent div:nth-child(1) p.commodity {
    margin-bottom: 20px;
    color: #999;
  }

  .ordersItem .busContent div:nth-child(1) p {
    color: #FFAB36;
  }

  .ordersItem .orderTime {
    padding: 10px 0;
    justify-content: space-between;
  }

  .ordersItem .orderTime span {
    font-size: 16px;
  }
</style>