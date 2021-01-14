<template>
  <div id="header_app">
    <div class="hApp disf" :class="{adminHeader:isAdminHeader}">
      <div class="hApp_left disf">
        <router-link to="/index">
          <img src="~assets/icon/LOGO.png" alt="">
        </router-link>
        <router-link to="/index">
        <p>饿着了</p>
        </router-link>

      </div>
      <div class="right">
        <slot name="search">
          <div class="right_search" @click="showHotSearch">
            <input type="text" placeholder="世赛烧烤店 满25减5" class="search" ref="searchContent" @keyup.enter="goResult">
            <a class="search_img" @click="goResult"><img src="~assets/icon/search.png" alt=""></a>
            <div class="search_select" :class="{hotSearchShow:isShowHotSearch}">
              <ul>
                <li v-for="(item,index) in hotSearch">
                  <a @click="aGoResult(item.title)" style="cursor: pointer;">
                    <span>{{index}}</span>
                    {{item.title}}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderLogo",
    data() {
      return {
        hotSearch: {
          1: {
            title: '寿司先森'
          },
          2: {
            title: 'XiangLashi'
          },
          3: {
            title: '伯爵自助餐'
          },
          4: {
            title: '海底捞'
          },
          5: {
            title: 'July七月中西餐厅'
          },
          6: {
            title: '饿了吗'
          },
          7: {
            title: '大树巨'
          },
          8: {
            title: '蜜雪冰城'
          },
          9: {
            title: '喜茶'
          },
          10: {
            title: '边度'
          }
        },
        isShowHotSearch:false,
        searchItem:'',

      }
    },
    props:{
      isAdminHeader:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      showHotSearch(){
        this.isShowHotSearch=true
        let search = document.querySelector('.search');
        search.addEventListener('blur',()=>{
         this.hiddHotSearch()
        })
      },
      hiddHotSearch(){
        setTimeout(()=>{
          this.isShowHotSearch=false
        },250)
      },
      goResult(){
        this.searchItem = this.$refs.searchContent.value
        this.$router.push('/result/'+this.searchItem)
      },
      aGoResult(item){
        this.searchItem = item
        this.$router.push('/result/'+this.searchItem)
      }
    }
  }
</script>

<style scoped>
  #header_app {
    width: 100%;
    height: 90px;
    background: #ffab36;
    min-width: 1200px;
  }

  #header_app .hApp {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
  .adminHeader{
    width: 95% !important;
  }
  #header_app .hApp .hApp_left {
    height: 100%;
    line-height: 90px;
  }

  #header_app .hApp .hApp_left a:first-child {
    width: 12%;
  }

  #header_app .hApp .hApp_left a img {
    width: 100%;
    vertical-align: middle;
  }

  #header_app .hApp .hApp_left p {
    font-size: 40px;
    color: #fff;
    cursor: pointer;
    margin-left: 10px;
  }

  .right_search {
    width: 260px;
    height: 35px;
    position: relative;
    background: #fff;
    border-radius: 20px;
  }

  .search {
    width: 75%;
    height: 100%;
    border: none;
    position: absolute;
    left: 20px;
    border-right: 1px solid #ffab36;
  }
  .hotSearchShow{
    display: block !important;
    animation: changeH 0.2s ease-in forwards !important;
  }
  .search::-webkit-input-placeholder {
    color: #ffab36;
  }

  .search::-moz-placeholder {
    color: #ffab36;
  }

  .right {
    position: relative;
  }

  .right_search .search_img{
    width: 15%;
    position: absolute;
    left: 225px;
    top: 5px;

  }

  .right_search a img {
    width: 65%;
  }

  .search_select {
    position: absolute;
    z-index: 99;
    width: 180px;
    height: 0px;
    background: #fff;
    box-shadow: 0 0 10px #909090;
    left: 20px;
    top: 45px;
    padding: 6px;
    border-radius: 4px;
    overflow: hidden;
    display: none;
  }
  .search_select:hover{
    display: block;
  }

  .search_select ul li {
    line-height: 25px;
    color: #454545;
  }

  .search_select ul li span {
    display: inline-block;
    width: 10px;
    margin-right: 10px;
    color: #a1d5ff;
  }

  .search_select ul li:nth-child(1) span {
    color: #FF0000;
  }

  .search_select ul li:nth-child(2) span {
    color: #FFAB32;
  }

  .search_select ul li:nth-child(3) span {
    color: #0096FF;
  }
  @keyframes changeH {
    to{
      height: 260px;
      display: block;
    }
  }
</style>