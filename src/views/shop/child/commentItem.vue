<template>
  <div class="comment">
    <div class="comTitle disf">
      <p>{{comLength}} 条餐友点评</p>
      <p class="sort disf">
        <span :class="{isSelect:isSelect}">时间排序</span>
        <span :class="{isSelect:!isSelect}">质量排序</span>
      </p>
    </div>
    <div class="describe">
      <span>味道好</span>
      <span>价格实惠</span>
      <span>服务热情</span>
      <span>体验不错</span>
    </div>
    <div class="content">
      <div style="border-bottom: 2px solid #E9E9E9;margin-top: 20px;" v-for="(item,index) in comment">
        <div class="contentTitle">
          <div class="disf" style="align-items: center">
          <span style="display: inline-block;width: 65px;height: 65px;">
            <img src="~assets/image/pingluntouxiang.png" alt="" style="width: 100%;">
          </span>
            <p style="margin: 0 18px">
              {{item.name}}
            </p>
            <p>{{item.time}}</p>
          </div>
        </div>
        <div class="contentText" style="width: 90%;margin-left: 80px">
          <p style="font-size: 16px">
            {{item.content}}
          </p>
          <img src="" alt="">
        </div>
        <div class="disf" style="margin-left: 80px;align-items: center;padding-bottom:40px;">
          <div style="margin-right: 30px">
            <img src="~assets/icon/good.png">
          </div>
          <p>回复</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commentItem",
    props:{
      comment:{
        type:Array,
        default:[],
      }
    },
    data() {
      return {
        showShop: '',
        isSelect:true,
        comLength:0,
      }
    },
    mounted() {
      this.showShop = this.$route.params.shopId
      this.comLength = this.comment.length
    }
  }
</script>

<style scoped>
  .comment {
    width: 100%;
    height: 400px;
    margin-top: 10px;
    background: #fff;
  }

  .comTitle {
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #FFAB36;
    padding: 0 20px;
    font-size: 16px;
  }
  .comTitle span{
    font-size: 14px;
    color: #676767;
  }
  .comment .sort{
    width: 130px;
    justify-content: space-between;
  }
  .comment .sort .isSelect{
    color: #FFAB36;
  }
  .comment .describe{
    width: 100%;
    padding: 20px 20px;
  }
  .comment .describe span{
    display: inline-block;
    padding: 4px 12px;
    border: 1px solid #FFAB36;
    margin-right: 30px;
  }
  .comment .content{
    width: 96%;
    padding:10px 20px;
    margin: 0 auto;
    background: #FCFCFC;
  }
</style>