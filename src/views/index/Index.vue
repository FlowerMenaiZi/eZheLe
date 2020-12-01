<template>
  <div>
    <indexBanner/>
    <indexRank/>
    <indexShop title="今日套餐推荐"/>
    <indexFind title="发现好店"/>
    <indexNearby/>
    <Footer/>
    <Copyright/>
  </div>
</template>

<script>
  import Copyright from "components/Copyright";
  import Footer from "components/Footer";
  import HeaderLogo from "components/HeaderLogo";
  import indexBanner from "./child/indexBanner";
  import indexRank from "./child/indexRank";
  import indexShop from "./child/indexShop";
  import indexFind from "./child/indexFind";
  import indexNearby from "./child/indexNearby";

  export default {
    name: "index",
    components: {
      HeaderLogo,
      indexBanner,
      indexRank,
      indexShop,
      indexFind,
      indexNearby,
      Footer,
      Copyright,
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>