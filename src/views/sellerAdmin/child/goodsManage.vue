<template>
  <div class="goodsMan">
    <div class="goodsTitle">
      <span class="title">管理产品</span>
      <span class="addGoods" @click="clickAddGoods"><img src="~assets/icon/goodsAdd.png" alt="">添加商品</span>
    </div>
    <div class="goodsSelect disf">
      <div>
        <label>商品:</label>
        <input type="text" ref="goods">
      </div>
      <div>
        <label>上架时间:</label>
        <input type="text" ref="time">
      </div>
      <div>
        <label>分类:</label>
        <input type="text" ref="classify">
      </div>
    </div>
    <div class="goodsInfo">
      <table class="tableItem">
        <tr>
          <td>商品号</td>
          <td>图片</td>
          <td>商品名</td>
          <td>分类</td>
          <td>价格</td>
          <td>商品介绍</td>
          <td>上架时间</td>
          <td>上/下架</td>
          <td>推荐</td>
          <td>编辑</td>
        </tr>
        <tr class="goodsItem" v-for="(item, index) in goodsItemInfo">
          <td>{{item.goodsId}}</td>
          <td class="goodsItemImg"><img src="~assets/image/hbbround.png" alt=""></td>
          <td style="width: 15%;">
            <p style="word-wrap:normal;margin: 0 auto;width: 41%;">{{item.goodsName}}</p>
          </td>
          <td>{{item.classify}}</td>
          <td>¥{{item.goodsPrice}}</td>
          <td><p class="goodsDesc" :title="item.goodsDesc">{{item.goodsDesc}}</p></td>
          <td>{{item.upperTime}}</td>
          <td><img src="~assets/icon/upper.png" alt="" v-show="!item.isUpper" @click="changeUpOrLow(index)"
                   title="上架"><img src="~assets/icon/lower.png" alt="" v-show="item.isUpper"
                                   @click="changeUpOrLow(index)" title="下架"></td>
          <td class="checkBox"><span class="checkSpan"><input type="checkbox" :checked="item.isRecommend"><img
                  src="~assets/icon/select.png" alt=""></span></td>
          <td class="edit"><img src="~assets/icon/bianji.png" @click="editGoods(index)"><img
                  src="~assets/icon/lajitong.png" class="del" @click="delGoods(index)"></td>
          <Vcode :show="isShowVcode" @success="success" @close="close" sliderText="您确定要删除吗"></Vcode>
        </tr>
      </table>
    </div>
    <div class="goodsHandle" v-show="isShowSmallPopup">
      <div class="handleTitle">
        {{addOrEditGoods}}
        <img src="~assets/icon/close.png" alt="" @click="cancelGoods">
      </div>
      <div class="handleContent disf">
        <div class="photo">
          图片
        </div>
        <div class="info">
          <div>
            <label>名称：</label>
            <input type="text" ref="handleName">
          </div>
          <div>
            <label>类别：</label>
            <input type="text" ref="handleClassify">
          </div>
          <div>
            <label>价格：</label>
            <input type="number" ref="handlePrice">
          </div>
          <div>
            <label>介绍：</label>
            <textarea ref="handleDesc"></textarea>
          </div>
        </div>
      </div>
      <div class="handleBtn">
        <button @click="cancelGoods">取消</button>
        <button @click="addGoods">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vcode from "vue-puzzle-vcode";

  export default {
    name: "goodsManage",
    components: {
      Vcode
    },
    props: {
      goodsItemInfo: {
        type: Array,
        default: [],
      }
    },
    data() {
      return {
        addOrEditGoods: '',
        isShowSmallPopup: false,
        addGoodsItem: {},
        isShowVcode: false,//显示验证码
        witchIndex: ''
      }
    },
    methods: {
      changeUpOrLow(index) {
        this.$emit('changeUpOrLow', index)
      },
      clickAddGoods() {
        this.$refs.handleName.value = ''
        this.$refs.handleClassify.value = ''
        this.$refs.handlePrice.value = ''
        this.$refs.handleDesc.value = ''
        this.addOrEditGoods = '商品添加'
        this.isShowSmallPopup = true
        this.$emit('showCover')
      },
      cancelGoods() {
        this.isShowSmallPopup = false
        this.$emit('hiddenCover')
      },
      addGoods() {
        //  添加商品
        if (this.$refs.handleName.value === '' || this.$refs.handleClassify.value === '' || this.$refs.handlePrice.value === '') {
          this.showToast('除介绍外不得为空')
        } else {
          this.addGoodsItem.goodsName = this.$refs.handleName.value
          this.addGoodsItem.classify = this.$refs.handleClassify.value
          this.addGoodsItem.goodsPrice = this.$refs.handlePrice.value
          this.addGoodsItem.goodsDesc = this.$refs.handleDesc.value
          this.addGoodsItem.isUpper = false
          this.addGoodsItem.isLowper = true
          this.addGoodsItem.isRecommend = false
          this.$emit('addGoods', this.addGoodsItem)
          this.isShowSmallPopup = false
          this.$emit('hiddenCover')
        }
      },
      editGoods(index) {
        this.addOrEditGoods = '商品编辑'
        this.isShowSmallPopup = true
        this.$emit('showCover')
        this.$refs.handleName.value = this.goodsItemInfo[index].goodsName
        this.$refs.handleClassify.value = this.goodsItemInfo[index].classify
        this.$refs.handlePrice.value = this.goodsItemInfo[index].goodsPrice
        this.$refs.handleDesc.value = this.goodsItemInfo[index].goodsDesc
      },
      delGoods(index) {
        this.witchIndex = index
        this.showCode()
      },
      showToast(message) {
        this.$swal({
          text: message
        })
      },
      //显示验证码
      showCode() {
        this.isShowVcode = true
      },
      //验证码成功
      success() {
        this.isShowVcode = false
        this.imgShow = true
        this.$emit('delGoods', this.witchIndex)
      },
      //点击遮罩隐藏验证码
      close() {
        this.isShowVcode = false;
      },
    }
  }
</script>

<style scoped>
  .handleBtn {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .handleBtn button {
    width: 60px;
    height: 25px;
    border-radius: 4px;
    outline: none;
  }

  .handleBtn button:nth-child(1) {
    margin-right: 20px;
    border: 1px solid #666666;
    background: #fff;
  }

  .handleBtn button:nth-child(2) {
    border: none;
    color: #fff;
    background: #FFAB36;
  }

  .handleContent {
    width: 100%;
    padding: 20px 30px;
    height: 210px;
  }

  .handleContent .photo {
    width: 40%;
    background: #f4f4f4;
    height: 100%;
    text-align: center;
    line-height: 160px;
    color: #DDDDDD;
    font-size: 20px;
    cursor: pointer;
  }

  .handleContent .info {
    width: 55%;
    margin-left: 20px;
  }

  .handleContent .info div {
    width: 100%;
    margin-bottom: 20px;
  }

  .handleContent .info div:last-child {
    margin-bottom: 0;
  }

  .handleContent .info div:last-child label {
    vertical-align: top;
  }

  .handleContent .info div input {
    width: 80%;
    border: 1px solid #E9E9E9;
    border-radius: 4px;
    text-indent: 10px;
    height: 25px;
  }

  .handleContent .info div textarea {
    width: 80%;
    resize: none;
    border: 1px solid #E9E9E9;
    border-radius: 4px;
    text-indent: 10px;
    outline: none;
  }

  .goodsHandle {
    width: 500px;
    height: 300px;
    background: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-40%, -40%);
    z-index: 99;
  }

  .goodsHandle .handleTitle {
    width: 100%;
    height: 40px;
    background: #FFAB36;
    position: relative;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
  }

  .goodsHandle .handleTitle img {
    height: 80%;
    text-align: right;
    position: absolute;
    right: 5px;
    top: 4px;
  }

  .goodsMan {
    padding: 10px 40px;
    height: 750px;
  }

  .goodsTitle {
    margin-top: 30px;
  }

  .goodsTitle .title {
    font-size: 20px;
    margin-right: 20px;
  }

  .goodsTitle .addGoods {
    display: inline-block;
    width: 100px;
    height: 25px;
    background: #FFAB36;
    line-height: 25px;
    border-radius: 6px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }

  .goodsTitle .addGoods img {
    vertical-align: text-bottom;
    margin-right: 5px;
    margin-bottom: 2px;
  }

  .goodsSelect {
    margin-top: 30px;
  }

  .goodsSelect div {
    width: 250px;
  }

  .goodsSelect div label {
    margin-right: 10px;
  }

  .goodsSelect div input {
    border: 1px solid #DDDDDD;
    outline: none;
    text-indent: 10px;
    height: 30px;
  }

  .goodsSelect div:nth-child(2) {
    margin-right: 30px;
  }

  .goodsInfo {
    margin-top: 30px;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
  }

  .tableItem {
    width: 100%;
    text-align: center;
    height: 100%;
    line-height: 40px;
  }

  .goodsDesc {
    margin: 0 auto;
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goodsItemImg {
    width: 10%;
  }

  .goodsItemImg img {
    width: 80%;
  }

  .goodsItem {
    border-top: 1px solid #DDDDDD;
    height: 100px;
    line-height: 20px;
  }

  .edit img {
    width: 12%;
  }

  .edit img.del {
    margin-left: 10px;
  }

  .checkSpan {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #FFAB36;
    position: relative;
    top: 5px;
  }

  .checkSpan input[type=checkbox] {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    z-index: 9;
    opacity: 0;
    cursor: pointer;
  }

  .checkSpan input[type=checkbox]:checked ~ img {
    display: block;
  }

  .checkSpan img {
    display: none;
    position: absolute;
    width: 98%;
  }
</style>