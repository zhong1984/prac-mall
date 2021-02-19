<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActivated">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div v-bind:style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {}
  },
  computed: {
    isActivated() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActivated ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      if (this.$router.history.current.path !== this.path) {
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}

.active {
  color: crimson;
}
</style>
