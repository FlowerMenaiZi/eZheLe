<template>
  <div class="busiManage">
    <div class="tip"><p>信息管理</p></div>
    <div class="tip"><p>以下是您的店铺信息</p></div>
    <div class="disf">
      <div class="Photo">
        <p>店铺主照片</p>
        <div class="container">
        </div>
      </div>
      <div class="information">
        <div>
          <span class="title">店铺命名</span>
          <span class="inforName">世赛小组烧烤店</span>
        </div>
        <div class="disf infSec">
          <span class="tel">
            <span class="title">店家联系电话</span>
            <span>17666362762</span>
          </span>
          <span class="time">
            <span class="title">营业时间</span>
            <a-time-picker use24-hours format="hh:mm a" @change="onChangeFir" v-show="!isModify" ref="timeFirst" placeholder="请选择时间"/>
            <span v-show="isModify">{{firstTime}}</span>
            ——
            <a-time-picker use24-hours format="hh:mm a" @change="onChangeSec" v-show="!isModify" ref="timeSecond" placeholder="请选择时间"/>
            <span v-show="isModify">{{secondTime}}</span>
          </span>
        </div>
        <div>
          <span class="title">店铺地址</span>
          <input type="text" class="businessAddress" v-show="!isModify" ref="address">
          <span v-show="isModify" ref="oldAddress">{{address}}</span>
        </div>
        <div>
          <span class="title desc">店铺简介</span>
          <textarea v-show="!isModify" ref="desc"></textarea>
          <span v-show="isModify">{{desc}}</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="cancel" v-show="!isModify" @click="cancelClick">取消</button>
      <button class="save" @click="clickModify">{{isModify?modify:save}}</button>
    </div>
  </div>
</template>

<script>
  import 'ant-design-vue/dist/antd.css';
  import moment from 'moment'

  export default {
    name: "busiManage",
    data() {
      return {
        modify: '编辑',
        save: '保存',
        isModify: true,
        address: '广东省中山市石岐区利和广场1楼2卡之一',
        desc: '一家让你吃了还想吃的店',
        firstTime: '09:00 am',
        secondTime: '10:00 pm',
        temFirTime: '',
        temSecTime: '',
      }
    },
    methods: {
      moment,
      clickModify() {
        if (this.isModify) {
          this.$refs.address.value = this.address
          this.$refs.desc.value = this.desc
          this.isModify = false
        } else {
          //  保存用户更改的信息
          localStorage.setItem('address', this.$refs.address.value)
          localStorage.setItem('desc', this.$refs.desc.value)
          localStorage.setItem('firstTime',this.firstTime)
          localStorage.setItem('secondTime',this.secondTime)
          this.address = localStorage.getItem('address')
          this.desc = localStorage.getItem('desc')
          this.firstTime = localStorage.getItem('firstTime')
          this.secondTime = localStorage.getItem('secondTime')
          this.isModify = true
        }
      },
      cancelClick() {
        //不保存用户更改的信息
        this.isModify = true
      },
      onChangeFir(time, timeString) {
        // console.log(timeString);
        this.firstTime = timeString
      },
      onChangeSec(time, timeString) {
        // console.log(timeString);
        this.secondTime = timeString
      },
    },
    mounted() {
      this.address = localStorage.getItem('address') ? localStorage.getItem('address') : this.address
      this.desc = localStorage.getItem('desc') ? localStorage.getItem('desc') : this.desc
      this.firstTime = localStorage.getItem('firstTime') ? localStorage.getItem('firstTime') : this.firstTime
      this.secondTime = localStorage.getItem('secondTime') ? localStorage.getItem('secondTime') : this.secondTime
    }
  }
</script>

<style scoped>
  p {
    margin-bottom: 0 !important;
  }

  .busiManage {
    width: 100%;
    padding: 40px 30px;
    background: #fff;
  }

  .tip {
    font-size: 18px;
    color: #2E3233;
    margin-bottom: 40px;
  }

  .tip:nth-child(2) {
    color: #666;
  }

  .Photo {
    width: 45%;
  }

  .Photo p {
    margin-bottom: 15px;
  }

  .Photo .container {
    width: 65%;
    height: 280px;
    border: 1px solid #999999;
    border-radius: 4px;
  }

  .information {
    width: 55%;
  }

  .infSec span.tel {
    display: inline-block;
    width: 300px;
    line-height: 32px;
  }
  .infSec span.time {
    line-height: 32px;
  }

  .information div {
    margin-bottom: 30px;
  }

  .information .title {
    display: inline-block;
    width: 100px;
  }

  .information .desc {
    vertical-align: top;
  }

  .information .businessAddress {
    outline: none;
    width: 60%;
    border: 1px solid #cfcfcf;
    height: 30px;
    text-indent: 10px;
  }

  .information textarea {
    width: 60%;
    height: 162px;
    resize: none;
    max-height: 162px;
    max-width: 60%;
    outline: none;
    text-indent: 10px;
    border: 1px solid #cfcfcf;
  }

  .btn {
    text-align: right;
  }

  .btn button {
    width: 70px;
    height: 25px;
    border-radius: 4px;
    outline: none;
    background: #fff;
    border: 1px solid #cfcfcf;
  }

  .btn .save {
    margin-left: 40px;
    background: #FFAB36;
    border: none;
    color: #fff;
  }
</style>