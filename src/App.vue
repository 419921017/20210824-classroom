<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">我的课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
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
};
</script>
<style lang="scss">
#app {
  width: 375px;
}
</style>
