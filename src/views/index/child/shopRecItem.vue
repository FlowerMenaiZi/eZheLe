<template>
  <div id="recommendItem">
    <li v-for="item in recInfo">
      <a :href="item.link">
        <div  :style="{'background':'url('+item.shopImg+') no-repeat','backgroundSize':'cover'}"></div>
        <h3>{{item.Name}}</h3>
        <p class="price">¥<span>{{item.realPrice}}</span><s>{{item.oldPrice}}</s></p>
        <p class="business">{{item.shopTitle}}</p>
      </a>
    </li>
  </div>
</template>

<script>
  export default {
    name: "shopRecItem",
    props:{
      recInfo:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>
  #recommendItem{
    display: flex;
    justify-content: space-around;
  }
  #recommendItem li{
    width: 20%;
  }

  #recommendItem li a {
    display: block;
    width: 100%;
  }

  #recommendItem li a div{
    width: 240px;
    height: 240px;
  }
  #recommendItem li a p.price {
    color: #FF0000;
    margin-top: 5px;
  }

  #recommendItem li a p.price span {
    font-size: 22px;
    margin-right: 10px;
  }

  #recommendItem li a p.price s {
    color: #999;
    font-size: 13px;
  }

  #recommendItem li a p.business {
    font-size: 12px;
    color: #C7C7C7;
  }
</style>