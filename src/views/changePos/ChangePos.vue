<template>
  <div>
    <HeaderLogo>
      <div slot="search">
        <p class="header-logo">——总让你饿不着的网站</p>
      </div>
    </HeaderLogo>
    <div class="posContent">
      <p class="title">选择地区 >>></p>
      <div class="posSelect">
        <div class="proSelect disf">
          <label>按省份选择：</label>
          <a-select style="width: 120px;margin-right: 20px"
                    @change="handleProvinceChange">
            <a-select-option v-for="province in provinceData" :key="province">
              {{ province }}
            </a-select-option>
          </a-select>
          <a-select v-model="secondCity" style="width: 120px" @change="handleCityChange">
            <a-select-option v-for="city in cities" :key="city">
              {{ city }}
            </a-select-option>
          </a-select>
          <div class="search disf">
            <label>直接搜索：</label>
            <a-input placeholder="请输入城市中文或拼音"/>
          </div>
        </div>
        <div class="hotCity">
          <label>热门城市：</label>
          <span @click="changeCity(item.cir_name)" v-for="item in hotCity">{{item.cir_name}}</span>
        </div>
        <div class="lately">
          <label>最近访问：</label>
          <span>北京</span>
        </div>
        <div class="letterStart disf">
          <div class="letterTitle">
            <label>按拼音首字母选择：</label>
          </div>
          <div class="letterContent">
            <span v-for="(item,index) in this.letterStart" :key="index"><a :href="anchor(item)">{{item}}</a></span>
          </div>
        </div>
        <div class="letterCityContent disf" :id="index" v-for="(letter,index) in this.letterCity">
          <div class="letterCityStart">
            <span>{{index}}</span>
          </div>
          <div class="letterCity">
            <span v-for="(item,index) in letter" @click="changeCity(item)">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import 'ant-design-vue/dist/antd.css';
  import HeaderLogo from "components/HeaderLogo";

  import Footer from "components/Footer";
  import Copyright from "components/Copyright";

  const provinceData = [];
  const cityData = {};
  export default {
    name: "ChangePos",
    components: {
      HeaderLogo,
      Footer,
      Copyright
    },
    data() {
      return {
        provinceData,
        cityData,
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]],
        allCity: [],
        curSelectAdCode: '',
        curSelectPro: '',
        letterStart: [],
        letterCity: {},
        provinceAllData: [],
        hotCity: [
          {
            cir_name: '北京'
          }, {
            cir_name: '上海'
          }, {
            cir_name: '广州'
          }, {
            cir_name: '深圳'
          }, {
            cir_name: '天津'
          }, {
            cir_name: '西安'
          }, {
            cir_name: '重庆'
          }, {
            cir_name: '杭州'
          }, {
            cir_name: '南京'
          }, {
            cir_name: '武汉'
          }, {
            cir_name: '成都'
          },
        ],
      };
    },
    computed: {
      anchor() {
        return (letter) => {
          return "#" + letter
        }
      }
    },
    methods: {
      changeCity(value) {
        // console.log(value);
        for (let city of this.allCity.filter(n => n !== '')) {
          for (let code of city) {
            if (code.cri_short_name === value) {
              this.curSelectAdCode = code.cri_code
              this.curSelectPro = this.getProvince(code.cri_parent_code)
              clearTimeout(timer)
              let timer = setTimeout(() => {
                localStorage.setItem('adcode', this.curSelectAdCode)
                localStorage.setItem('province', this.curSelectPro)
                localStorage.setItem('city', code.cri_name)
                this.$bus.$emit('updateData', {province: this.curSelectPro, city: code.cri_name})
              }, 2000)
            }
          }
        }
      },
      getProvince(code) {
        for (let item of this.provinceAllData) {
          if (code === item.cri_code) {
            return item.cri_name
          }
        }
      },
      handleProvinceChange(value) {
        this.cities = cityData[value];
        this.secondCity = cityData[value][0];
        this.curSelectPro = value
        this.getApCode()
      },
      handleCityChange() {
        this.getApCode()
      },
      getApCode() {
        for (let city of this.allCity.filter(n => n !== '')) {
          for (let code of city) {
            if (code.cri_name === this.secondCity) {
              this.curSelectAdCode = code.cri_code
              clearTimeout(timer)
              let timer = setTimeout(() => {
                localStorage.setItem('adcode', this.curSelectAdCode)
                localStorage.setItem('province', this.curSelectPro)
                localStorage.setItem('city', this.secondCity)
                this.$bus.$emit('updateData', {province: this.curSelectPro, city: this.secondCity})
              }, 2500)
            }
          }
        }
      }
    },
    mounted() {
      this.letterStart = JSON.parse(localStorage.getItem('letterStart'))
      this.letterCity = JSON.parse(localStorage.getItem('letterCity'))
      this.$api.get(
        '/index/index/selectAddress',
        {},
        {},
        success => {
          for (let cri of success.data) {
            this.provinceAllData.push(cri)
            this.allCity.push(cri.city)
            this.provinceData.push(cri.cri_name)
            let criName = cri.cri_name
            this.cityData[criName] = []
            for (let smcri of cri.city) {
              this.cityData[criName].push(smcri.cri_name)
            }
          }
        },
        failureRes => {
        }
      )

    },
  }
</script>

<style scoped>
  .letterCityContent {
    width: 100%;
    padding: 10px 0;
    margin: 10px 0;
  }

  .letterCityStart span {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #FFAB36;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
  }

  .letterCity {
    line-height: 35px;
  }

  .letterCity span {
    padding: 0 20px;
    display: inline-block;
    text-align: center;
    color: #666;
    cursor: pointer;
  }

  .letterCity span:hover {
    color: #FFAB36;
  }

  .header-logo {
    color: #fff;
  }

  .posContent {
    width: 1200px;
    margin: 0 auto;
  }

  .title {
    font-size: 14px;
    padding: 6px 0;
    border-bottom: 1px solid #DDDDDD;
    margin-bottom: 30px;
  }

  .posSelect {
    width: 100%;
    padding: 20px 30px;
    box-shadow: 0 3px 20px 8px rgba(6, 0, 1, 0.06);
  }

  .proSelect {
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #ddd;
  }

  .search {
    align-items: center;
    margin-left: 100px;
  }

  .search .ant-input {
    width: 200px;
  }

  .search label {
    width: 80px;
  }

  .hotCity, .lately {
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #ddd;
  }

  .letterStart {
    border: none;
    height: 90px;
    margin-top: 20px;
    line-height: 50px;
  }

  .letterTitle {
    width: 14%;
  }

  .letterContent {
    width: 86%;
  }

  .letterStart span {
    display: inline-block;
    width: 55px;
    text-align: center;
  }

  .letterStart span a {
    display: block;
    width: 100%;
  }

  .letterStart span a:hover {
    color: #FFAB36;
  }

  .hotCity span, .lately span {
    display: inline-block;
    width: 70px;
    text-align: center;
    cursor: pointer;
  }
</style>