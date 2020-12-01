<template>
  <div>
    <div class="disf" style="width: 100%;padding: 15px;background: #fff;margin-top: 10px"
         v-for="(item,index) in searchResInfo">
      <div style="width: 20%;margin-right:20px;">
        <img :src="item.image" alt="" style="width: 100%;">
      </div>
      <div class="business_desc">
        <div class="disf" style="justify-content: space-between;border-bottom: 1px solid #E5E5E5;padding: 10px 0">
          <span>{{item.businessTitle}}<span style="color:#A3A3A3">（{{item.shopArea}}）</span></span>
          <span :style="item.isCollection?'color: #FFAB36;':'color:#DBDBDB'" @click="collection(item.businessId)">
            <img :src="item.isCollection?yesCol:noCol" style="margin-right: 10px;vertical-align: bottom">{{item.isCollection?Coned:Con}}
          </span>
        </div>
        <div class="disf" style="justify-content: space-between;">
          <p style="color:#A3A3A3;font-size: 14px">评分
            <span style="color:#FFAB36">{{item.score}}　{{highLow(index)}}</span>
          </p>
          <p style="color: #fff;width: 25px;height:25px;background: #FFAB36;text-align: center;border-radius: 4px;line-height: 25px;font-size: 14px">
            荐
          </p>
        </div>
        <div>
          <p style="color: #676767;font-size: 14px;">地址|{{item.address}}</p>
        </div>
        <div>
          <p style="color:#676767;font-size: 14px">人均 <span style="color:#FFAB36">¥ {{item.price}}</span></p>
        </div>
        <div class="businessLink">
          <router-link :to="'/index/'+item.businessId" style="color: #FFAB36">进店　＞</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import yesCol from 'assets/icon/xingxing 1.png'
  import noCol from 'assets/icon/xingxing 2.png'

  export default {
    name: "businessItem",
    props: {
      searchResInfo: {
        default: []
      }
    },
    data() {
      return {
        Con: '点击收藏',
        Coned: '收藏店铺',
        yesCol: yesCol,
        noCol: noCol
      }
    },
    computed: {
      highLow() {
        return (index) => {
          let isHighLow = '';
          if (this.searchResInfo[index].score > 7) {
            isHighLow = '高'
          } else {
            isHighLow = '低'
          }
          return isHighLow
        }
      }
    },
    methods: {
      collection(bid) {
        let isCol = this.searchResInfo.filter(n => n.businessId === bid)[0].isCollection
        if (isCol) {
          //取消收藏
          this.searchResInfo.filter(n => n.businessId === bid)[0].isCollection = false
        } else {
          //添加收藏
          this.searchResInfo.filter(n => n.businessId === bid)[0].isCollection = true
        }
      }
    }
  }
</script>

<style scoped>
  .business_desc {
    width: 80%;
  }

  .business_desc > div {
    margin-bottom: 10px;

  }

  .businessLink {
    margin-top: 30px;
  }
</style>