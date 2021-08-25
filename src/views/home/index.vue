<template>
  <div class="home">
    <HomeHeader v-model="currentCategory"></HomeHeader>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import * as Types from '@/store/action-types';

import HomeHeader from './home-header.vue'

let res = createNamespacedHelpers('home')

console.log('res', res);

let { mapState, mapMutations, mapActions } = res


export default {
  components: {
    HomeHeader
  },
  computed: {
    ...mapState(['category', 'slides']),
    currentCategory: {
      get() {
        return this.category
      },
      set(value) {
        this[Types.SET_CATEGORY](value)
      }
    }
  },
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    ...mapMutations([Types.SET_CATEGORY]),
    ...mapActions([Types.SET_SLIDES])
  },
  mounted() {
    // console.log(this);
    // this[Types.SET_SLIDES]()
    if (this.slides.length == 0) {
      this[Types.SET_SLIDES]()
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>