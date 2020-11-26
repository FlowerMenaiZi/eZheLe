<template>
  <div id="banner">
    <div class="banner">
      <div class="banner_title">
        <ul>
          <li><a href="">甜品</a></li>
          <li><a href="">小食</a></li>
          <li><a href="">饮品</a></li>
          <li><a href="">汤品</a></li>
          <li><a href="">主食</a></li>
        </ul>
      </div>
      <div class="banner_img">
        <a :href="bannerUrl"><img :src="bannerImg" alt="" id="bImg"></a>
      </div>
    </div>
  </div>
</template>

<script>
  import banner1 from 'assets/image/banner1.png'
  import banner2 from 'assets/image/banner2.png'
  import banner3 from 'assets/image/banner3.png'
  import banner4 from 'assets/image/banner4.png'
  import banner5 from 'assets/image/banner5.png'
  export default {
    name: "indexBanner",
    data() {
      return {
        bannerArr: [banner1, banner2, banner3, banner4, banner5],
        currentIndex:1,
        bannerUrl:'banner1.png',
        bannerImg:banner1
      }
    },
    created() {
      this.moveBanner()
    },
    methods:{
      changeBanner(){
        if (this.currentIndex > this.bannerArr.length - 1) {
          this.currentIndex = 0
        }
        this.bannerImg=this.bannerArr[this.currentIndex]
        this.currentIndex++
      },
      moveBanner(){
        setInterval(this.changeBanner, 3000)
      }

    }
  }
</script>

<style scoped>
  #banner {
    width: 100%;
    height: 442px;
    margin: 40px 0;
  }

  #banner .banner {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 0 15px #c4c4c4;
  }

  #banner .banner .banner_title {
    position: absolute;
    width: 140px;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  #banner .banner .banner_title ul {
    height: 100%;
  }

  #banner .banner .banner_title ul li {
    height: 20%;
    text-align: center;
    line-height: 88.93px;
  }

  #banner .banner .banner_title ul li a {
    display: block;
    height: 100%;
    color: #fff;
    width: 100%;
  }

  #banner .banner .banner_title ul li a:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  #banner .banner .banner_img {
    position: relative;
  }

  #banner .banner .banner_img #bImg {
    position: absolute;
    top: 0;
    transition: all 2s;
  }
</style>