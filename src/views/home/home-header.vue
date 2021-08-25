<template>
  <div class="wrapper">
    <div class="home-header">
      <img
        src="@/assets/logo.png"
        alt=""
      >
      <van-dropdown-menu>
        <van-dropdown-item
          :value="value"
          @change="change"
          :options="categories"
        />
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data() {
    return {
      value1: 0,

      categories: [
        {
          text: '全部课程',
          value: -1
        },
        {
          text: 'node课程',
          value: 0
        },
        {
          text: 'react课程',
          value: 1
        },
        {
          text: 'vue课程',
          value: 2
        },
      ]

    };
  },
  methods: {
    change(newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  padding: 0 20px;
  background: $background;
}
.home-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 48px;
}
</style>