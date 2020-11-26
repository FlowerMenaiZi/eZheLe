<template>
  <div class="register">
    <h3>{{titleInfo}}</h3>
    <div class="publicBlock">
      <div>
       <slot name="desc">
         <p>注册饿着了账号以便追踪您的订单，管理收货地址，获取更多个性化信息</p>
       </slot>
      </div>
      <slot name="phone">
        <div>
          <label for="username">昵称</label>
          <input type="text" id="username" placeholder="输入新昵称" ref="username">
        </div>
      </slot>
      <div>
        <label for="email">邮箱</label>
        <input type="text" id="email" placeholder="输入邮箱" ref="email">
      </div>
      <div>
        <label for="newPassword">新的密码</label>
        <input type="password" placeholder="密码长度不少于8位 数字字母组成" ref="password" id="newPassword">
      </div>
      <div>
        <label for="repPassword">确认密码</label>
        <input type="password" placeholder="再次输入密码" ref="repPassword" id="repPassword">
      </div>
      <div>
        <label>验证码</label>
        <button class="getCode" @click="showCode" style="margin-left: 0;">{{checkStatus}}<img
                src="~assets/icon/success.png" alt="" style="width: 15%;vertical-align: middle" v-show="imgShow">
        </button>
        <Vcode :show="isShowVcode" @success="success" @close="close"></Vcode>
      </div>
      <slot name="agree" class="agree"></slot>
      <div class="regBtn">
        <button id="registerBtn" @click="registerClick">{{endBtnText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vcode from 'vue-puzzle-vcode'

  import {checkAll,checkAllPass} from "common/mixin";
  export default {
    name: "Register",
    props: {
      titleInfo: {
        type: String,
        default: ''
      },
      endBtnText:{
        type:String,
        default:''
      },
      agree:{
        type:Boolean,
        default:false
      },
      phone:{
        type:String,
        default:''
      },
      isForget:{
        type:Boolean,
        default:false
      }
    },
    mixins:[checkAll,checkAllPass],
    components: {
      Vcode
    },
    data() {
      return {

      }
    },
    methods: {
      //验证昵称是否填写
      checkUserName(){
        if (this.$refs.username.value === '') {
          this.showToast('请填写您的昵称')
          return false
        }else {
          return true
        }
      },
      //是否同意网站协议
      checkAgree() {
        if (!this.agree) {
          this.showToast('请先同意网站使用和销售条款')
          return false
        } else {
          return true
        }
      },
      registerClick() {
        this.$emit('getUserName')
        if (!this.isForget){
          // this.showToast('当前为注册')
          if (this.checkUserName() && this.checkEmail() && this.checkPassword() && this.checkRepPass() && this.checkImgCode() && this.checkAgree()) {
            this.showToast('验证通过')
          }
        }else{
          // this.showToast('当前为找回密码')
          if (this.checkPhone() && this.checkEmail() && this.checkPassword() && this.checkRepPass() && this.checkImgCode()) {
            this.showToast('验证通过')
          }
        }

      },
    }
  }
</script>

<style scoped>
  .register {
    width: 100%;
  }

  h3 {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    line-height: 80px;
  }

  .publicBlock {
    width: 1200px;
    margin: 0 auto;
    padding: 40px 140px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 10px #bdbdbd;
  }

  .publicBlock div {
    margin-bottom: 40px;
  }

  input[type=text], input[type=password] {
    width: 220px;
    height: 40px;
    border-radius: 6px;
    outline: none;
    border: 1px solid #E6E6E6;
    text-indent: 15px;
  }

  input[type=password] {
    width: 260px;
  }

  .publicBlock div label {
    display: inline-block;
    width: 100px;
    margin-right: 100px;
  }

  .publicBlock div .getCode {
    width: 150px;
    height: 40px;
    background: #ffab36;
    outline: none;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }

  .agree {
    display: flex;
    justify-content: left;
    position: relative;
  }

  .agree input {
    position: absolute;
    top: 4px;
    left: 0;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    background: none;
  }

  input[type=checkbox]:after {
    position: absolute;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    top: 0;
    content: " ";
    border: 1px solid #FFAB36;
    color: #fff;
    display: inline-block;
    visibility: visible;
    padding: 0px 3px;
    border-radius: 2px;
  }

  input[type=checkbox]:checked:after {
    content: "✓";
    font-size: 12px;
    background: #FFAB36;
  }

  .agree p {
    width: 85%;
    text-align: left;
    color: #999;
    margin-left: 30px;
  }

  .agree p span {
    color: black;
  }

  .regBtn {
    text-align: right;
  }

  #registerBtn {
    width: 80px;
    height: 30px;
    color: #fff;
    border: none;
    border-radius: 20px;
    outline: none;
    background: #ffab36;
  }
</style>