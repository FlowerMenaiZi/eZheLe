<template>
  <div>
    <div id="searchRes" class="disf">
      <div class="resLeft">
        <curLocation class="curLocation">
          <span slot="first">{{this.fromUrl}}></span>
          <span slot="second">{{this.searchItem}}</span>
        </curLocation>
        <div class="select">
          <div>评分
            <span class="high" :class="{selectThis:isShowHigh}" @click="selectHigh">高</span>
            <span class="low" :class="{selectThis:isShowlow}" @click="selectLow">低</span>
          </div>
          <div>人均
            <input type="number" class="price_low" @input="lowPrice" ref="lowPrice" :value="curPriceLow">——
            <input type="number" class="price_high" @input="highPrice" ref="highPrice" :value="curPriceHigh">
          </div>
          <div class="addBlock">
            <p>地区</p>
            <ul>
              <li @click="selectBlock(index)" class="block" v-for="(item,index) in block">{{item.cri_name}}</li>
            </ul>
          </div>
        </div>
        <businessItem :searchResInfo="filterSearch?filterSearch:searchResInfo"></businessItem>
        <!--        <Paging :pageCount="pageCount"-->
        <!--                :marginPages="marginPages"-->
        <!--                :rangePage="rangePage"-->
        <!--                :initPage="initPage"-->
        <!--                @pageEvent="pageEvent"></Paging>-->
      </div>
      <div class="rightLike">
        <guessLike :guessLikeInfo="guessLikeInfo"/>
      </div>
    </div>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import curLocation from "components/curLocation";
  import Footer from "components/Footer";
  import Copyright from "components/Copyright";
  import Paging from "components/Paging";

  import businessItem from "./child/businessItem";
  import guessLike from "./child/guessLike";

  import businImage from "assets/image/heyTea.jpg"
  import guessImage from "assets/image/tianpin.jpg"

  export default {
    name: "SearchRes",
    components: {
      curLocation,
      businessItem,
      guessLike,

      Footer,
      Copyright,
      Paging
    },
    data() {
      return {
        searchItem: '',
        fromUrl: '首页',
        isShowHigh: false,
        isShowlow: false,
        selectBlockIndex: null,
        curSelectBlock: '',
        curSelectScore: '',
        curPriceHigh: 0,
        curPriceLow: 0,
        block:[],
        searchResInfo: [
          {
            businessId: '000001',
            block: '东区街道',
            image: businImage,
            businessTitle: '喜茶',
            shopArea: '利和店',
            score: '9.8',
            address: '东区街道银通街2号利和公寓商铺，利和新都汇首铺20卡之二',
            price: '30',
            isCollection: true
          },
          {
            businessId: '000002',
            block: '石岐区街道',
            image: businImage,
            businessTitle: '茶喜',
            shopArea: '和利店',
            score: '9.5',
            address: '和利新都汇首铺20卡之二，石岐区街道银通街2号利和公寓商铺',
            price: '20',
            isCollection: false
          },
          {
            businessId: '000003',
            block: '小榄镇',
            image: businImage,
            businessTitle: '茶喜',
            shopArea: '和利店',
            score: '7.5',
            address: '和利新都汇首铺20卡之二，石岐区街道银通街2号利和公寓商铺',
            price: '25',
            isCollection: false
          },
          {
            businessId: '000004',
            block: '石岐区街道',
            image: businImage,
            businessTitle: '茶喜',
            shopArea: '和利店',
            score: '6.5',
            address: '和利新都汇首铺20卡之二，石岐区街道银通街2号利和公寓商铺',
            price: '26',
            isCollection: false
          },
          {
            businessId: '000005',
            block: '石岐区街道',
            image: businImage,
            businessTitle: '茶喜',
            shopArea: '和利店',
            score: '5.5',
            address: '和利新都汇首铺20卡之二，石岐区街道银通街2号利和公寓商铺',
            price: '24',
            isCollection: false
          }
        ],
        guessLikeInfo: [
          {
            businessId: '000006',
            block: '东区',
            image: guessImage,
            businessTitle: '满记甜品',
            shopArea: '利和店',
            score: '9.8',
            price: '30'
          },
          {
            businessId: '000007',
            block: '东区',
            image: guessImage,
            businessTitle: '满记甜品',
            shopArea: '利和店',
            score: '9.8',
            price: '30'
          },
          {
            businessId: '000008',
            block: '东区',
            image: guessImage,
            businessTitle: '满记甜品',
            shopArea: '利和店',
            score: '9.8',
            price: '30'
          },
          {
            businessId: '000009',
            block: '东区',
            image: guessImage,
            businessTitle: '满记甜品',
            shopArea: '利和店',
            score: '9.8',
            price: '30'
          },
          {
            businessId: '000010',
            block: '东区',
            image: guessImage,
            businessTitle: '满记甜品',
            shopArea: '利和店',
            score: '9.8',
            price: '30'
          },
        ],
        filterSearch: null,

        pageCount: 20,  //最大页数
        marginPages: 1,  //右边显示几个数字页数的范围
        rangePage: 8,   //左边显示几个数字页数的范围
        initPage: 0,   //初始化的页数为第一页

        adcode: ''  //获取当前地区的adcode
      }
    },
    methods: {
      //选择评分高
      selectHigh() {
        if (!this.isShowHigh) {
          this.isShowHigh = true
          this.isShowlow = false
          this.curSelectScore = '高'
          this.filterHighSearch()
        } else {
          this.isShowHigh = false
          this.isShowlow = false
          this.curSelectScore = ''
          if (this.curSelectBlock) {
            this.filterBlockSearch()
          } else {
            this.filterSearch = null
          }
        }
      },
      //选择评分低
      selectLow() {
        if (!this.isShowlow) {
          this.isShowHigh = false
          this.isShowlow = true
          this.curSelectScore = '低'
          this.filterLowSearch()
        } else {
          this.isShowlow = false
          this.isShowHigh = false
          this.curSelectScore = ''
          if (this.curSelectBlock) {
            this.filterBlockSearch()
          } else {
            this.filterSearch = null
          }
        }
      },
      //地区选择
      selectBlock(index) {
        if (this.selectBlockIndex !== index) {
          let block = document.getElementsByClassName('block')
          for (let i = 0; i < block.length; i++) {
            block[i].classList.remove('selectBlock')
          }
          block[index].classList.add('selectBlock')
          this.curSelectBlock = block[index].innerText
          this.selectBlockIndex = index
          this.filterBlockSearch()
        } else {
          let block = document.getElementsByClassName('block')
          for (let i = 0; i < block.length; i++) {
            block[i].classList.remove('selectBlock')
          }
          this.curSelectBlock = ''
          this.selectBlockIndex = -1
          if (this.curSelectScore === '高') {
            this.filterHighSearch()
          } else if (this.curSelectScore === '低') {
            this.filterLowSearch()
          } else {
            this.filterSearch = null
          }
        }
      },
      //获取人均最低价格
      lowPrice() {
        setTimeout(() => {
          this.curPriceLow = this.$refs.lowPrice.value < 0 ? 0 : this.$refs.lowPrice.value
          this.perCapita
          this.filterCapitaSearch()
        }, 200)
      },
      //获取人均最高价格
      highPrice() {
        setTimeout(() => {
          this.curPriceHigh = this.$refs.highPrice.value < 0 ? 0 : this.$refs.highPrice.value
          this.perCapita
          this.filterCapitaSearch()
        }, 200)
      },
      //分页页数
      pageEvent(e) {
        console.log(e);
      },
      //过滤评分低的
      filterHighSearch() {
        if (this.curSelectBlock && this.curPriceHigh !== 0) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score > 7)
            .filter(info => info.block === this.curSelectBlock)
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        } else if (this.curPriceHigh !== 0) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score > 7)
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        } else if (this.curSelectBlock) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score > 7)
            .filter(info => info.block === this.curSelectBlock)
        } else {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score > 7)
        }
      },
      //过滤评分高的
      filterLowSearch() {
        if (this.curSelectBlock && this.curPriceHigh !== 0) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score < 7)
            .filter(info => info.block === this.curSelectBlock)
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        } else if (this.curPriceHigh !== 0) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score < 7)
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        } else if (this.curSelectBlock) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score < 7)
            .filter(info => info.block === this.curSelectBlock)
        } else {
          this.filterSearch = this.searchResInfo
            .filter(info => info.score < 7)
        }
      },
      //  选择地区
      filterBlockSearch() {
        if (this.curSelectScore === "高" && this.curPriceHigh !== 0) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.block === this.curSelectBlock)
            .filter(info => info.score > 7)
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        } else if (this.curSelectScore === "低" && this.curPriceHigh !== 0) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.block === this.curSelectBlock)
            .filter(info => info.score <= 7)
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        } else if (this.curSelectScore === "低") {
          this.filterSearch = this.searchResInfo
            .filter(info => info.block === this.curSelectBlock)
            .filter(info => info.score <= 7)
        } else if (this.curSelectScore === "高") {
          this.filterSearch = this.searchResInfo
            .filter(info => info.block === this.curSelectBlock)
            .filter(info => info.score > 7)
        } else if (this.curPriceHigh !== 0) {
          this.filterSearch = this.searchResInfo
            .filter(info => info.block === this.curSelectBlock)
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        } else {
          this.filterSearch = this.searchResInfo
            .filter(info => info.block === this.curSelectBlock)
        }
      },
      //  人均
      filterCapitaSearch() {
        if (this.curSelectScore === "高" && this.curSelectBlock) {
          this.filterSearch = this.searchResInfo
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
            .filter(info => info.score > 7)
            .filter(info => info.block === this.curSelectBlock)
        } else if (this.curSelectScore === "低" && this.curSelectBlock) {
          this.filterSearch = this.searchResInfo
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
            .filter(info => info.score < 7)
            .filter(info => info.block === this.curSelectBlock)
        } else if (this.curSelectScore === "高") {
          this.filterSearch = this.searchResInfo
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
            .filter(info => info.score > 7)
        } else if (this.curSelectScore === "低") {
          this.filterSearch = this.searchResInfo
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
            .filter(info => info.score < 7)
        } else if (this.curSelectBlock) {
          this.filterSearch = this.searchResInfo
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
            .filter(info => info.block === this.curSelectBlock)
        } else {
          this.filterSearch = this.searchResInfo
            .filter(info => parseInt(info.price) >= parseInt(this.curPriceLow) && parseInt(info.price) <= parseInt(this.curPriceHigh))
        }
      },
    },
    computed: {
      perCapita() {
        if (this.curPriceLow !== 0 || this.curPriceHigh !== 0) {
          if (parseInt(this.curPriceLow) > parseInt(this.curPriceHigh)) {
            let price = this.curPriceHigh
            this.curPriceHigh = this.curPriceLow
            this.curPriceLow = price;
          }
        }
      }
    },
    mounted() {
      //获取用户搜索信息
      this.searchItem = this.$route.params.item
      //  发送服务器数据请求
      //  获取地区
      //  获取当前地区的adcode
      this.adcode = localStorage.getItem('adcode')
      this.$api.post(
        "/index/index/twon",
        {},
        {"paCode": this.adcode},
        success => {
          this.block = success
        },
        failureRes => {
        }
      )
    },
    beforeRouteEnter(to, from, next) {
      next(Vue => {
        if (from.path === '/index') {
          Vue.fromUrl = '首页'
        }
      })
    },
    //监听url变化
    watch: {
      $route() {
        this.searchItem = this.$route.params.item
      },
    },
  }
</script>

<style scoped>
  #searchRes {
    width: 1200px;
    margin: 0 auto;
  }

  .resLeft {
    width: 80%;
  }

  .curLocation {
    background: #fff;
    width: 100%;
    height: 35px;
    line-height: 35px;
    margin-top: 20px;
    padding: 0 20px;
  }

  .select {
    width: 100%;
    margin-top: 10px;
    background: #fff;
    /*height: 150px;*/
    padding: 10px 20px;
    overflow: hidden;
  }

  .select div {
    margin-top: 10px;
  }

  .select span {
    margin-left: 20px;
    color: #DBDBDB;
    cursor: pointer;
  }

  .select span.selectThis {
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 22px;
    background: #ffab36;
    color: #fff;
    border-radius: 4px;
  }

  .select input[type=number] {
    width: 40px;
    height: 22px;
    border: 1px solid #FFAB36;
    outline: none;
    margin: 0 20px;
    border-radius: 6px;
    text-indent: 4px;
  }

  .select .addBlock p {
    display: inline-block;

  }

  .select .addBlock ul {
    display: inline-flex;
    width: 850px;
    flex-wrap: wrap;
    line-height: 30px;
    margin-left: 10px;
  }

  .select .addBlock ul li {
    padding: 2px 10px;
    text-align: center;
  }

  .select .addBlock ul li.selectBlock {
    color: #FFAB36;
  }

  .rightLike {
    width: 18%;
    margin-left: 24px;
  }
</style>