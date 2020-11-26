<template>
  <div id="nearbyItem">
    <li v-for="item in nearbyInfo">
      <a :href="item.link" class="disf">
      <div>
        <img :src="item.shopImg" alt="">
      </div>
      <div class="desc">
        <p class="business">{{item.shopTitle}}</p>
        <p class="price"><img :src="item.star" alt=""><span>人均 ¥{{item.realPrice}}</span></p>
        <p class="classify">{{item.classify}}</p>
      </div>
      <div class="distance">
        <p>{{item.distance}}</p>
      </div>
    </a>
    </li>
  </div>
</template>

<script>
  export default {
    name: "nearbyItem",
    props:{
      nearbyInfo:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>
  #nearbyItem li {
    padding: 40px 0;
    border-bottom: 1px solid #DDDDDD;
  }

  #nearbyItem li a .price {
    color: #666666;
    font-size: 14px;
  }

  #nearbyItem li a .price img {
    width: 15%;
    margin-right: 30px;
    vertical-align: center;
  }

  #nearbyItem li a .desc {
    line-height: 40px;
    margin-left: 40px;
  }

  #nearbyItem li a .classify {
    color: #333;
  }

  #nearbyItem li a .desc .business {
    font-weight: 600;
  }

  #nearbyItem li a .distance {
    line-height: 120px;
    color: #FFAB36;
  }
</style>