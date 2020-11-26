<template>
  <div id="hbRank">
    <li class="disf" v-for="item in hbItemInfo">
      <div class="money">
        <p>¥<span>{{item.price}}</span></p>
        <p>红包</p>
      </div>
      <div class="date">
        <span>红包卡券</span>
        <p>{{item.date}}</p>
      </div>
      <div class="receive">
        <a href="">立即领取 ></a>
      </div>
    </li>
  </div>
</template>

<script>
  export default {
    name: "rankHbItem",
    props:{
      hbItemInfo:{
        type:Object,
        default:{},
      }
    }
  }
</script>

<style scoped>
  #hbRank li {
    width: 350px;
    background: #fff;
    box-shadow: 0 0 15px #e2e2e2;
    height: 100px;
    margin-top: 10px;
    position: relative;
  }

  #hbRank li div {
    height: 90px;
    position: absolute;

  }

  #hbRank li .money {
    top: 20px;
    left: 10px;
  }

  #hbRank li .money p {
    color: #FFAB36;
    font-size: 18px;
    text-align: center;
  }

  #hbRank li .money p span {
    font-size: 30px;
    font-weight: 600;
  }

  #hbRank li .date {
    top: 30px;
    left: 70px;
  }

  #hbRank li .date span {
    font-size: 13px;
    color: #999;
  }

  #hbRank li .date p {
    margin-top: 10px;
    font-size: 13px;
  }

  #hbRank li .receive {
    top: 40px;
    left: 250px;
  }

  #hbRank li .receive a {
    color: #999;
  }
</style>