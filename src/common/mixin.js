export const checkAll = {
  data(){
    return{
      isShowVcode: false,//显示验证码
      checkStatus: '点击验证',
      imgShow: false,  //验证成功照片显示

    }
  },
  methods:{
    //验证手机号码是否填写且合法性
    checkPhone() {
      if (this.phone === '') {
        this.showToast('请先填写手机号码')
        return false
      } else if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone))) {
        this.showToast('请先填写正确的手机号码')
        return false
      } else {
        return true
      }
    },
    //显示验证码
    showCode() {
      this.isShowVcode = true
    },
    //验证码成功
    success() {
      this.isShowVcode = false
      this.imgShow = true
      this.checkStatus = '验证成功'
    },
    //点击遮罩隐藏验证码
    close() {
      this.isShowVcode = false;
    },
    //验证账号是否填写且合法
    checkEmail() {
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (this.$refs.email.value === '') {
        this.showToast('请填写您的邮箱账号')
        return false
      } else if (!myreg.test(this.$refs.email.value)){
        this.showToast('请填写正确格式的邮箱')
        return false
      }else{
        return true
      }
    },

    //图片验证是否通过
    checkImgCode() {
      if (!this.imgShow) {
        this.showToast('请进行验证')
        this.showCode()
        return false
      } else {
        return true
      }
    },
    //显示错误信息
    showToast(message) {
      this.$swal({
        text: message
      })
    }
  }
}

export const checkAllPass = {
  methods: {
    //验证密码是否填写是否合法
    checkPassword() {
      var myreg = /^(?=.*?[0-9])(?=.*?[a-z])[0-9a-z]{8,}$/;
      if (this.$refs.password.value === '') {
        this.showToast('请填写您的密码')
        return false
      } else if (!myreg.test(this.$refs.password.value)) {
        this.showToast('请填写正确填写密码要求')
        return false
      } else {
        return true
      }
    },
    //验证确认密码是否填写是否一致
    checkRepPass() {
      if (this.$refs.repPassword.value === '') {
        this.showToast('请您确认密码')
        return false
      } else if (this.$refs.repPassword.value !== this.$refs.password.value) {
        this.showToast('确认密码与密码不符')
        return false
      } else {
        return true
      }
    },
  }
}