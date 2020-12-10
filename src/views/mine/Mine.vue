<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p style="color: #fff">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <div class="mineTitle">
      <p>我的账号 >>></p>
    </div>
    <div class="mineContent disf">
      <mineNav></mineNav>
      <div class="rightContent">
        <div class="defaultShow">
          <div class="title">
            <p>我的设置</p>
          </div>
          <div class="disf about">
            <div class="disf">
              <span class="portrait"><img src="~assets/image/touxiang.png" alt="" id="portrait"></span>
              <label for="uploadImg">更换</label>
              <input type="file" style="display: none" id="uploadImg" accept=".png,.jpg,.jpeg,.webp,.gif">
            </div>
            <div>
              <p @click="showInfo">
                个人信息
                <img src="~assets/icon/myInfo.png" alt=""
                     style="vertical-align: text-top;margin-left: 20px;transition: all 0.2s ease-in;"
                     :class="{showInfo:isShowInfo}">
              </p>
            </div>
          </div>
        </div>
        <div class="myInfo" v-show="isShowInfo">
          <div class="myInfoTitle">
            <p>个人信息</p>
          </div>
          <!--          昵称——称谓-->
          <div class="disf userName">
            <div style="width: 270px;">
              <label>昵称*</label>
              <span v-show="!userName">{{user}}</span>
              <input type="text" placeholder="请输入昵称" v-show="userName" ref="username">
            </div>
            <div>
              <label>称谓</label>
              <span v-show="!sex">{{userSex}}</span>
              <select name="sex" v-show="sex" ref="sex">
                <option value="man">男士</option>
                <option value="women">女士</option>
              </select>
            </div>
          </div>
          <!--          生日-->
          <div class="birthday userName">
            <label>生日</label>
            <span v-show="!firstBir">{{birthday}}</span>
            <a-date-picker @change="onChange" placeholder="请选择生日" :showToday="false" :disabledDate="disabledDate"
                           v-show="firstBir" ref="birthday"/>
            <span class="tip">生日确认后，不得更改，如有需要和客服联系。</span>
          </div>
          <!--          邮箱——手机号-->
          <div class="userEmail userName disf">
            <div style="width: 270px;">
              <label class="email">邮箱</label>
              <span>1219902018@qq.com</span>
            </div>
            <div>
              <label class="phone">手机号</label>
              <span>17666362762</span>
            </div>
          </div>
          <!--          修改密码——保存-->
          <div class="allBtn disf" style="justify-content: space-between">
            <div>
              <button class="changePass payPass" v-show="userName">
                <router-link to="addPay">添加支付密码</router-link>
              </button>
              <button class="changePass" v-show="userName">
                <router-link to="/modifyPay">修改支付密码</router-link>
              </button>
              <button class="changePass" v-show="userName" @click="modifyPass">修改登录密码</button>
            </div>
            <div>
              <button class="editInfo" @click="editInfo" v-show="!userName">编辑</button>
              <button class="cancel" v-show="userName" @click="cancelEdit">取消</button>
              <button class="save" v-show="userName" @click="saveEdit">保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup" v-show="showEditPass">
      <div class="handleTitle">
        修改密码
        <img src="~assets/icon/close.png" alt="" @click="cancelEditPass">
      </div>
      <div class="popupContent">
        <p>旧密码:</p>
        <input type="password" ref="oldPassword">
        <p>新密码:</p>
        <input type="password" ref="password">
        <p>确认密码:</p>
        <input type="password" ref="repPassword">
        <div class="popupBtn">
          <button @click="cancelEditPass">取消</button>
          <button @click="savePass">保存</button>
        </div>
      </div>
    </div>
    <div class="cover" v-show="showEditPass"></div>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import 'ant-design-vue/dist/antd.css';
  import {checkAllPass} from "common/mixin";

  import HeaderLogo from "components/HeaderLogo";
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";

  import mineNav from "./child/mineNav";

  export default {
    name: "Mine",
    components: {
      HeaderLogo,
      Copyright,
      Footer,
      mineNav,
    },
    mixins: [checkAllPass],
    data() {
      return {
        isShowInfo: false,
        firstBir: false,
        userName: false,
        sex: false,
        showEditPass: false,
        user: '花花',
        userSex: '男士',
        birthday: '',
        selectDate: ''
      }
    },
    mounted() {
      document.getElementById('uploadImg').addEventListener('change',()=>{
        // console.log();
        this.upLoad(document.getElementById('uploadImg'))
      })
    },
    methods: {
      upLoad(value){
        var oFReader = new FileReader();
        var file = value.files[0];
        oFReader.readAsDataURL(file)
        oFReader.onloadend=(oFRevent)=>{
          var src = oFRevent.target.result
          document.getElementById('portrait').src = src
          // console.log(src);
        }
      },
      showInfo() {
        //判断当时用户是否处于编辑状态
        if (this.userName === true) {
          this.showToast('请保存您的更改')
        } else {
          this.isShowInfo = !this.isShowInfo
        }
      },
      onChange(date, dateString) {
        // console.log(dateString);
        this.selectDate = dateString
      },
      disabledDate(current) {
        return current && current > Date.now();
      },
      editInfo() {
        this.$refs.username.value = this.user
        this.userName = true
        this.sex = true
        if (this.birthday === '') {
          this.firstBir = true
        }
      },
      cancelEdit() {
        this.firstBir = false
        this.userName = false
        this.sex = false
      },
      saveEdit() {
        this.firstBir = false
        this.userName = false
        this.sex = false
        //获取用户修改信息
        this.user = this.$refs.username.value
        if (this.$refs.sex.value == 'women') {
          this.userSex = '女士'
        } else {
          this.userSex = '男士'
        }
        this.birthday = this.selectDate
        //判断用户的信息是否有改变，有则上传，无则不变
      },
      modifyPass() {
        this.$refs.password.value = ''
        this.$refs.repPassword.value = ''
        this.$refs.oldPassword.value = ''
        this.showEditPass = true
      },
      cancelEditPass() {
        this.showEditPass = false
      },
      savePass() {
        if (this.checkPassword() && this.checkRepPass()) {
          this.showToast('修改成功')
          this.showEditPass = false
        }

      },

    },

  }
</script>

<style scoped>
  .mineTitle {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }

  .mineContent {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .rightContent {
    width: 76%;
  }

  .defaultShow {
    margin-left: 40px;
    width: 100%;
    height: 230px;
    background: #fff;
    padding: 30px 40px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
  }

  .myInfo {
    margin-top: 40px;
    margin-left: 40px;
    background: #fff;
    width: 100%;
    padding: 30px 40px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
  }

  .defaultShow .title {
    width: 100%;
    height: 50px;
    font-size: 20px;
  }

  .defaultShow .about {
    align-items: center;
    justify-content: space-between;
  }

  .defaultShow .about div:nth-child(1) {
    align-items: center;
  }

  .defaultShow .about div:nth-child(1) span {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #F2F2F2;
    text-align: center;
    margin-right: 50px;
    overflow: hidden;
  }

  .defaultShow .about div:nth-child(1) span img {
    /*margin-top: 11px;*/
    width: 100%;
  }

  .showInfo {
    transition: all 0.2s ease-in;
    transform: rotateZ(90deg);
  }

  .myInfoTitle {
    font-size: 20px;
  }

  .userName {
    margin-top: 40px;
    height: 32px;
    line-height: 32px;
  }

  .userName label {
    margin-right: 40px;
  }

  .userName input {
    width: 194px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-indent: 10px;
  }

  .userName select {
    width: 100px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
  }

  .userName div:nth-child(1) {
    margin-right: 60px;
  }

  .birthday {
    margin-top: 40px;
  }

  .birthday label {
    margin-right: 45px;
  }

  .birthday span.tip {
    color: #999999;
    margin-left: 60px;
    font-size: 12px;
  }

  .userEmail label.email {
    margin-right: 45px;
  }

  .userEmail label.phone {
    margin-right: 28px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  .allBtn {
    margin-top: 40px;
  }

  .allBtn button {
    height: 25px;
    outline: none;
    border-radius: 4px;
    width: 70px;
    border: 1px solid #CFCFCF;
    background: #fff;
  }

  .allBtn .changePass {
    width: 90px;
    margin-right: 30px;
  }

  .allBtn .payPass {
    border: 1px solid #FFAB36;
    color: #FFAB36;
  }

  .allBtn .cancel {
    margin-right: 20px;
  }

  .allBtn .save {
    background: #FFAB36;
    border: none;
    color: #fff;
  }

  .popup {
    width: 300px;
    height: 335px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -30%);
    z-index: 99;
  }

  .popup .handleTitle {
    width: 100%;
    height: 35px;
    background: #FFAB36;
    position: relative;
    text-align: center;
    line-height: 35px;
    color: #fff;
    font-size: 16px;
  }

  .popup .handleTitle img {
    height: 80%;
    text-align: right;
    position: absolute;
    right: 5px;
    top: 4px;
  }

  .popup .popupContent {
    width: 100%;
    height: 300px;
    background: #fff;
    padding: 10px 30px;
  }

  .popup .popupContent p {
    margin-top: 20px;
  }

  .popup .popupContent input {
    width: 100%;
    height: 25px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-indent: 10px;
    margin-top: 4px;
  }

  .popup .popupContent .popupBtn {
    margin-top: 20px;
    text-align: center;
  }

  .popup .popupContent .popupBtn button {
    width: 60px;
    height: 25px;
    border-radius: 4px;
    background: #FFAB36;
    color: #fff;
    border: none;
  }

  .popup .popupContent .popupBtn button:nth-child(1) {
    border: 1px solid #ddd;
    background: #fff;
    color: #666666;
    margin-right: 20px;
  }

  .cover {
    width: 100%;
    height: 1438px;
    background: rgba(0, 0, 0, 0.40);
    position: absolute;
    top: 0;
    z-index: 9;
  }
</style>