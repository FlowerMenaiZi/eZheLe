<template>
  <div class="orderManage">
    <div class="tip disf">
      <div class="tipLeft">
        <p>订单管理</p>
        <p>以下是您接到的订单</p>
      </div>
      <div class="statusOpe">
        <div class="screen"><img src="~assets/icon/shaixuan.png" style="vertical-align: text-bottom;margin-right: 4px">筛选
        </div>
        <div class="status">
          <p>已发货</p>
          <p>待发货</p>
          <p>待接单</p>
          <p>全部</p>
        </div>
      </div>
    </div>
    <div class="goodsInfo">
      <table class="tableItem">
        <tr>
          <td>订单号</td>
          <td>订单</td>
          <td>订单状态</td>
          <td>订单创建时间</td>
          <td>买家备注</td>
          <td>联系买家</td>
          <td>地址</td>
          <td>金额</td>
          <td>发货状态</td>
        </tr>
        <tr class="ordersItem" v-for="(item, index) in ordersItemInfo">
          <td>{{item.orderId}}</td>
          <td>{{item.orderName}}</td>
          <td>{{orderStatus(item.orderStatus)}}</td>
          <td>{{item.orderCreateTime}}</td>
          <td style="color: black" @click="clickAddGoods('买家备注',item.buyerNotes)">
            <p class="ordersDesc">{{buyerNotes(item.buyerNotes)}}</p>
          </td>
          <td style="color: #FFAB36">{{item.telBuyer}}</td>
          <td @click="clickAddGoods('买家地址',item.buyerAddress)">
            <p class="ordersDesc">{{item.buyerAddress}}</p>
          </td>
          <td style="color: #FFAB36">¥{{item.orderPrice}}</td>
          <td>
            <p :class="{goodsStatus:item.deliverGoodsStatus !== 1}">
            {{deliverGoodsStatus(item.deliverGoodsStatus)}}</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="goodsHandle" v-show="isShowSmallPopup">
      <div class="handleTitle">
        {{addOrEditGoods}}
        <img src="~assets/icon/close.png" alt="" @click="cancelGoods">
      </div>
      <div class="handleContent">
        <div class="info">
          <textarea ref="handleDesc"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "orderMange",
    props: {
      ordersItemInfo: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        addOrEditGoods: '',
        isShowSmallPopup: false,
      }
    },
    methods: {
      clickAddGoods(info, content) {
        this.$refs.handleDesc.value = content
        this.addOrEditGoods = info
        this.isShowSmallPopup = true
        this.$emit('showCover')
      },
      cancelGoods() {
        this.isShowSmallPopup = false
        this.$emit('hiddenCover')
      },
    },
    computed: {
      orderStatus() {
        return (index) => {
          switch (index) {
            case 1:
              return '已完成'
            case 2:
              return '未完成'
            case 3:
              return '待接单'
          }
        }
      },
      deliverGoodsStatus() {
        return (index) => {
          switch (index) {
            case 1:
              return '已发货'
            case 2:
              return '发货'
            case 3:
              return '接单'
          }
        }
      },
      buyerNotes() {
        return (content) => {
          if (content === '') {
            return '无'
          } else {
            return content
          }
        }
      }
    }
  }
</script>

<style scoped>
  .handleContent {
    width: 100%;
    padding: 20px 30px;
    height: 210px;
  }

  .handleContent .info {
    width: 100%;
    height: 180px;
  }
  .handleContent .info textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid #E9E9E9;
    border-radius: 4px;
    text-indent: 10px;
    outline: none;
    background: #F7F7F7;
  }

  .goodsHandle {
    width: 500px;
    height: 300px;
    background: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-60%, -50%);
    z-index: 99;
  }

  .goodsHandle .handleTitle {
    width: 100%;
    height: 40px;
    background: #FFAB36;
    position: relative;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
  }

  .goodsHandle .handleTitle img {
    height: 80%;
    text-align: right;
    position: absolute;
    right: 5px;
    top: 4px;
  }

  .orderManage {
    width: 100%;
    padding: 20px 30px;
    background: #fff;
  }

  .tip {
    justify-content: space-between;
  }

  .tip .tipLeft p:nth-child(1) {
    font-size: 30px;
    color: #2E3233;
    margin-bottom: 40px;
  }

  .tip .tipLeft p:nth-child(2) {
    font-size: 20px;
    color: #666;
    margin-bottom: 40px;
  }

  .tip .statusOpe {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tip .statusOpe .screen {
    width: 70px;
    height: 30px;
    background: #FFAB36;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
  }

  .tip .statusOpe .status {
    width: 80px;
    height: 100px;
    background: #F7F7F7;
    text-align: center;
    line-height: 24px;
    margin-top: 10px;
  }

  .goodsInfo {
    margin-top: 30px;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
  }

  .tableItem {
    width: 100%;
    height: 100%;
    line-height: 40px;
    text-align: center;
  }

  .ordersItem {
    border-top: 1px solid #DDDDDD;
    height: 50px;
  }

  .ordersItem td {
    color: #7d7d7d;
  }

  .ordersDesc {
    margin: 0 auto;
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .goodsStatus {
    width: 55px;
    height: 26px;
    background: #FFAB36;
    border-radius: 13px;
    line-height: 26px;
    margin: 0 auto;
    color: #fff;
    cursor: pointer;
  }
</style>