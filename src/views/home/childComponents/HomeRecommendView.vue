<template>
  <div class="recommend">
    <div v-for="recommend in recommends" class="recommend-item">
      <a :href="recommend.link">
        <img :src="recommend.image" alt="">
        <div>{{ recommend.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;

  padding: 15px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
