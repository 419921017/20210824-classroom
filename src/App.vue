<template>
  <div id="app">
    <router-view />
    <van-tabbar
      v-model="active"
      route
    >
      <van-tabbar-item
        icon="home-o"
        to="/"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/lesson"
      >我的课程</van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        to="/profile"
      >个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script >
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {

  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  .van-dropdown-menu__bar {
    background: $background;
    .van-dropdown-menu__title {
      color: $color;
    }
  }
}
</style>
