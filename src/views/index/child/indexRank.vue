<template>
  <div id="rank">
    <div class="rank disf">
      <div class="rank_left rank_item">
        <h3>猜你喜欢</h3>
        <img src="~assets/image/arrLeft.png" class="arrow arrow_left" @click="leftRowClick">
        <div class="small_banner">
          <img :src="shutiao" alt="" class="img_left smBImg">
          <img :src="shutiao1" alt="" class="img_center smBImg">
          <img :src="shutiao2" alt="" class="img_right smBImg">
        </div>
        <img src="~assets/image/arrRight.png" class="arrow arrow_right" @click="rightRowClick">
        <p>July七月Pizza（石岐店）</p>
        <a href="">来这里发现更多新品</a>
      </div>
      <div class="rank_center rank_item">
        <h3>排行榜</h3>
        <ul>
          <rankItem :rankItemInfo="rankItemInfo"></rankItem>
        </ul>
      </div>
      <div class="rank_right rank_item">
        <h3>领券中心</h3>
        <ul>
          <rankHbItem :hbItemInfo="hbItemInfo"></rankHbItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import shutiao from 'assets/image/shutiao.jpg'
  import shutiao1 from 'assets/image/shutiao.jpg'
  import shutiao2 from 'assets/image/shutiao.jpg'

  import topImage1 from 'assets/image/Top1.png'
  import topImage2 from 'assets/image/Top2.png'
  import topImage3 from 'assets/image/Top3.png'
  import logo from 'assets/image/Spicy-hero.png'

  import rankItem from "./rankItem";
  import rankHbItem from "./rankHbItem";

  export default {
    name: "indexRank",
    data() {
      return {
        shutiao: shutiao,
        shutiao1: shutiao1,
        shutiao2: shutiao2,
        rankItemInfo: {
          0: {
            topImages: topImage1,
            logo: logo,
            title: '伯爵自助餐',
            pop: '30.2'
          },
          1: {
            topImages: topImage2,
            logo: logo,
            title: '麻辣英雄',
            pop: '25.6'
          },
          2: {
            topImages: topImage3,
            logo: logo,
            title: '海底捞',
            pop: '24.7'
          },
        }, //模拟接口数据
        hbItemInfo: {
          0: {
            price: 10,
            date: '2020-12-1 11:30'
          },
          1: {
            price: 30,
            date: '2020-12-3 19:30'
          },
          2: {
            price: 40,
            date: '2020-12-13 00:00'
          }
        }, //模拟接口数据
        rCurrentClick: 1,
        lCurrentClick: 1,
        smBImg: null,
      }
    },
    components: {
      rankItem,
      rankHbItem,
    },
    methods: {

      rChangeCenterBig(f, scale, top, left) {
        this.smBImg[f].style.transform = `scale(${scale})`
        this.smBImg[f].style.top = `${top}px`
        this.smBImg[f].style.left = `${left}px`
        this.smBImg[f].style.zIndex = '9'
      },
      rChangeRightSmall(s, scale, top, left) {
        this.smBImg[s].style.transform = `scale(${scale})`
        this.smBImg[s].style.top = `${top}px`
        this.smBImg[s].style.left = `${left}px`
        this.smBImg[s].style.zIndex = '5'
      },
      rChangeLeftSmall(t, scale, top, left) {
        this.smBImg[t].style.transform = `scale(${scale})`
        this.smBImg[t].style.top = `${top}px`
        this.smBImg[t].style.left = `${left}px`
        this.smBImg[t].style.zIndex = '1'
      },
      rightRowClick() {
        this.smBImg = document.getElementsByClassName('smBImg');
        if (this.rCurrentClick === 1) {
          this.rChangeCenterBig(0, 1.55, 127, 145.5);
          this.rChangeRightSmall(1, 0.64, 14, 244);
          this.rChangeLeftSmall(2, 1, 90, 20)
        } else if (this.rCurrentClick === 2) {
          this.rChangeCenterBig(2, 1.55, 127, 145.5);
          this.rChangeRightSmall(0, 1, 90, 270);
          this.rChangeLeftSmall(1, 0.64, 12, -6)
        } else {
          this.rChangeCenterBig(1, 1, 50, 120);
          this.rChangeRightSmall(2, 1, 90, 271);
          this.rChangeLeftSmall(0, 1, 90, 20)
        }
        this.rCurrentClick++
        if (this.rCurrentClick > 3) {
          this.rCurrentClick = 1
        }
      },


      lChangeCenterBig(f,scale,top,left) {
        this.smBImg[f].style.transform = `scale(${scale})`
        this.smBImg[f].style.top = `${top}px`
        this.smBImg[f].style.left = `${left}px`
        this.smBImg[f].style.zIndex = '9'
      },
      lChangeRightSmall(s,scale,top,left) {
        this.smBImg[s].style.transform = `scale(${scale})`
        this.smBImg[s].style.top = `${top}px`
        this.smBImg[s].style.left = `${left}px`
        this.smBImg[s].style.zIndex = '1'
      },
      lChangeLeftSmall(t,scale,top,left) {
        this.smBImg[t].style.transform = `scale(${scale})`
        this.smBImg[t].style.top = `${top}px`
        this.smBImg[t].style.left = `${left}px`
        this.smBImg[t].style.zIndex = '5'
      },
      leftRowClick() {
        this.smBImg = document.getElementsByClassName('smBImg');
        if (this.lCurrentClick === 1) {
          this.lChangeCenterBig(2, 1.55, 127, 145.5);
          this.lChangeRightSmall(0, 1, 90, 270);
          this.lChangeLeftSmall(1, 0.64, 12, -6)
        } else if (this.lCurrentClick === 2) {
          this.lChangeCenterBig(0, 1.55, 127, 145.5);
          this.lChangeRightSmall(1, 0.64, 13, 245);
          this.lChangeLeftSmall(2, 1, 90, 19)
        } else {
          this.lChangeCenterBig(1, 1, 50, 120);
          this.lChangeRightSmall(2, 1, 90, 271);
          this.lChangeLeftSmall(0, 1, 90, 20)
        }
        this.lCurrentClick++
        if (this.lCurrentClick > 3) {
          this.lCurrentClick = 1
        }
      }
    }
  }
</script>

<style scoped>
  #rank {
    width: 100%;
  }

  #rank .rank {
    width: 1200px;
    margin: 0 auto;
    height: 420px;
  }

  #rank .rank h3 {
    margin: 10px 0;
    margin-left: 30px;
  }

  #rank .rank .rank_item {
    width: 420px;
    background: #fff;
    box-shadow: 0 0 15px #c4c4c4;
    position: relative;
  }

  #rank .rank .rank_item .arrow {
    position: absolute;
    top: 45%;
    width: 30px;
    height: 30px;
    display: block;
    background: rgba(149, 149, 149, 0.5);
    z-index: 9;
    cursor: pointer;
  }

  #rank .rank .rank_item .arrow.arrow_left {
    left: 5px;
  }

  #rank .rank .rank_item .arrow.arrow_right {
    right: 5px;
  }

  #rank .rank .rank_item ul li {
    height: 100px;
  }

  #rank .rank .rank_left .small_banner {
    height: 310px;
    width: 100%;
    position: relative;
  }

  #rank .rank .rank_left .small_banner img {
    height: 70%;
    transform-origin: center bottom;
    transition: all 1s;
    position: absolute;

  }

  #rank .rank .rank_left .small_banner .img_left {
    height: 45%;
    top: 90px;
    left: 20px;
  }

  #rank .rank .rank_left .small_banner .img_center {
    top: 50px;
    left: 120px;
  }

  #rank .rank .rank_left .small_banner .img_right {
    height: 45%;
    top: 90px;
    left: 270px;
  }

  #rank .rank .rank_left p {
    text-align: center;
    font-size: 20px;
  }

  #rank .rank .rank_left a {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #636363;
    margin-top: 10px;
  }

  #rank .rank .rank_center {
    margin: 0 20px;
  }

  .rank_center ul {
    padding: 20px;
  }

  .rank_right ul {
    padding: 20px;
  }


</style>