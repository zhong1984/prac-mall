<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Mall</div>
    </nav-bar>

    <HomeSwiper :banners="banners"></HomeSwiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import HomeRecommendView from "@/views/home/childComponents/HomeRecommendView";
import {getHomeMultiData} from "@/network/home";

export default {
  name: "Home",
  components: {NavBar, HomeSwiper, HomeRecommendView},
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    //  1. 请求多个数据
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
