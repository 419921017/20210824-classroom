import * as Types from '@/store/action-types';

import store from '@/store';
import axios from 'axios';

class HttpRequest {
  constructor() {
    this.baseURL =
      process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:7001';
    this.timeout = 3000;
    // 请求队列, 做loading处理
    this.queue = {};
  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {
      if (Object.keys(this.queue).length == 0) {
        // loading = true
      }

      this.queue[url] = true;
      // 取消请求
      let CancelToken = axios.CancelToken;
      config.cancelToken = new CancelToken((c) => {
        // c是请求token, 做终止请求, xhr.abort
        store.commit(Types.SET_CANCEL_TOKEN, c);
      });
      return config;
    });
    instance.interceptors.response.use(
      (res) => {
        delete this.queue[url];

        if (Object.keys(this.queue).length == 0) {
          // loading = false
        }

        if (res.data.err == 0) {
          return res.data.data;
        } else {
          return Promise.reject(res.data);
        }
      },
      (err) => {
        delete this.queue[url];
        return Promise.reject(err);
      }
    );
  }
  request(options) {
    let instance = axios.create();
    let config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options,
    };
    this.setInterceptor(instance, config.url);
    // 返回的是一个promise
    return instance(config);
  }
  get(url, data) {
    return this.request({
      url,
      method: 'get',
      ...data,
    });
  }
  post(url, data) {
    return this.request({
      url,
      method: 'post',
      data,
    });
  }
}

export default new HttpRequest();
