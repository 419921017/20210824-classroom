<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-model="repassword"
        type="password"
        name="再次输入密码"
        label="再次输入密码"
        placeholder="再次输入密码"
        :rules="[{ required: true, message: '再次输入密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
        >提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import * as Types from '@/store/action-types';
import { Dialog } from 'vant'
export default {
  data() {
    return {
      username: '',
      password: '',
      repassword: '',
    };
  },
  methods: {
    async onSubmit(values) {
      console.log('submit', values);
      try {
        await this[Types.SET_LOGIN](values)
      } catch (error) {
        Dialog.alert({
          title: "登录失败",
          message: e.data
        })
      }
    },
  },
}
</script>

<style>
</style> 