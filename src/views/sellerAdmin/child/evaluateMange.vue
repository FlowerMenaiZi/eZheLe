<template>
  <div class="evaluateManage">
    <div class="tip disf">
      <div class="tipLeft">
        <p>订单管理</p>
        <p>以下是您回复的订单</p>
      </div>
      <div class="statusOpe">
        <div class="screen"><img src="~assets/icon/shaixuan.png" style="vertical-align: text-bottom;margin-right: 4px">筛选
        </div>
        <div class="status">
          <p>已回复</p>
          <p>待回复</p>
          <p>全部</p>
        </div>
      </div>
    </div>
    <div class="goodsInfo">
      <table class="tableItem">
        <tr>
          <td>订单号</td>
          <td>订单</td>
          <td>订单创建时间</td>
          <td>订单评分</td>
          <td>买家评论</td>
          <td>订单状态</td>
          <td>我的回复</td>
          <td>编辑回复</td>
        </tr>
        <tr class="evalItem" v-for="(item,index) in evaluateInfo">
          <td>{{item.orderId}}</td>
          <td>{{item.orderName}}</td>
          <td>{{item.orderTime}}</td>
          <td>{{item.orderScore}}分</td>
          <td><p class="evalDesc" :title="item.evaluate">{{item.evaluate}}</p></td>
          <td>{{orderStatus(item.orderStatus)}}</td>
          <td><p class="evalDesc" :title="item.myReply">{{item.myReply}}</p></td>
          <td>
            <img src="~assets/icon/bianji.png" v-show="editReply(item.myReply)" style="width: 20%;" @click="clickReply(index)">
            <p v-show="!editReply(item.myReply)">已回复</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="goodsHandle" v-show="isShowSmallPopup">
      <div class="handleContent">
        <div class="info">
          <textarea ref="handleDesc" placeholder="编辑回复"></textarea>
        </div>
        <div>
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
        </div>
        <div class="handleBtn">
          <button @click="cancelReply">取消</button>
          <button @click="reply">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "evaluateMange",
    data(){
      return{
        isShowSmallPopup: false,
        witchOrder:null
      }
    },
    props:{
      evaluateInfo:{
        type:Array,
        default:[]
      }
    },
    computed:{
      orderStatus() {
        return (orderStatus) => {
          switch (orderStatus) {
            case 1:
              return '已完成'
            case 2:
              return '未完成'
            case 3:
              return '待接单'
          }
        }
      },
      editReply(){
        return (reply)=>{
          if (reply === ''){
            return true
          }else{
            return false
          }
        }
      },
    },
    methods:{
      clickReply(index){
        this.$refs.handleDesc.value = ''
        this.isShowSmallPopup = true
        this.witchOrder = index
        this.$emit('showCover')
      },
      cancelReply() {
        this.isShowSmallPopup = false
        this.$emit('hiddenCover')
      },
      reply(){
        this.isShowSmallPopup = false
        this.$emit('reply',[this.witchOrder,this.$refs.handleDesc.value])
      },
    }
  }
</script>

<style scoped>
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
    height: 80px;
    background: #F7F7F7;
    text-align: center;
    line-height: 24px;
    margin-top: 10px;
  }
  .evaluateManage {
    width: 100%;
    padding: 20px 30px;
    background: #fff;
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

  .evalItem {
    border-top: 1px solid #DDDDDD;
    height: 50px;
  }

  .evalItem td {
    color: #7d7d7d;
  }

  .evalDesc {
    margin: 0 auto;
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  .goodsHandle {
    width: 500px;
    height: 300px;
    background: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-70%, -50%);
    z-index: 99;
  }

  .goodsHandle .handleTitle img {
    height: 80%;
    text-align: right;
    position: absolute;
    right: 5px;
    top: 4px;
  }
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
  .handleBtn{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .handleBtn button{
    width: 60px;
    height: 25px;
    border-radius: 4px;
    outline: none;
  }
  .handleBtn button:nth-child(1){
    margin-right: 20px;
    border: 1px solid #666666;
    background: #fff;
  }
  .handleBtn button:nth-child(2){
    border:none;
    color: #fff;
    background: #FFAB36;
  }
</style>