<template>
  <div>
    <div class="guessTitle disf" >
      <p>猜你喜欢</p>
      <router-link to="/index" class="guessMore">更多 > </router-link>
    </div>
    <div class="disf guessBusiness" style="flex-direction: column;align-items: center;justify-content: center" v-for="item in guessLikeInfo">
      <div style="width: 70%;">
        <img :src="item.image" alt="" style="width: 100%;">
      </div>
      <div>
        <span>{{item.businessTitle}}<span style="color:#A3A3A3">（{{item.shopArea}}）</span></span>
      </div>
     <div>
       <p style="color:#A3A3A3;font-size: 14px;margin-top: 5px">评分 <span style="color:#FFAB36">{{item.score}}　高</span></p>
     </div>
      <div>
        <p style="color:#676767;font-size: 14px;margin-top: 5px">人均 <span style="color:#FFAB36">¥ {{item.price}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "guessLike",
    props:{
      guessLikeInfo:{
        default:[]
      }
    }
  }
</script>

<style scoped>
.guessTitle{
  margin-top: 20px;
  width: 100%;
  height: 35px;
  line-height: 35px;
  background: #fff;
  justify-content: space-between;
  align-items: center;
}
  .guessTitle p{
    width: 70px;
    border-radius: 4px;
    background: #FFAB36;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    margin-left: 10px;
  }
  .guessTitle .guessMore{
    color: #FFAB36;
    font-size: 14px;
    margin-right: 5px;
  }
  .guessBusiness{
    width: 100%;
    background: #fff;
    border-top: 1px solid #E5E5E5;
    padding: 12px 0;
  }
</style>