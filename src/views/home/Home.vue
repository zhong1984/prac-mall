<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Mall</div>
    </nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";

export default {
  name: "Home",
  components: {NavBar},
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    //  1. 请求多个数据
    getHomeMultiData().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
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
