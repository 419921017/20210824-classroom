<template>
  <div class="home">
    <HomeHeader v-model="currentCategory"></HomeHeader>{{currentCategory}}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import * as Types from '@/store/action-types';

import HomeHeader from './home-header.vue'

let res = createNamespacedHelpers('home')

console.log('res', res);

let { mapState, mapMutations } = res


export default {
  components: {
    HomeHeader
  },
  computed: {
    ...mapState(['category']),
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
    ...mapMutations([Types.SET_CATEGORY])
  },
  mounted() {
    console.log(this);
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>