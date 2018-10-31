/* eslint-disable no-console */
import Axios from 'axios';
// import { Msg } from '@/helper/element_ui';
import _ from 'lodash';

// TODO:
// 解码

const axios = Axios.create({
  baseURL: 'http://47.104.65.186:8081/',
  timeout: 1000,
});

const extract = async (promise) => {
  const result = await promise;
  const config = result.config;
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `%c${config.url}`,
        `color: ${result.data.code === 200 ? '#02c092' : '#ff6246'}`,
        {
          params: config.params,
          result: result.data,
        },
      );
    }
    return {
      code: result.code,
      desc: result.desc,
      message: result.message,
    };
  } catch (e) {
    throw Object({
      code: e.response && e.response.status,
      desc: e.response && e.response.statusText,
      message: e.message,
    });
  }
};

export const get = (url, params, config) =>
  extract(axios.get(url, {
    params,
    ...config,
  }));

export const post = (url, params, config) =>
  extract(axios.post(url, params, {
    transformRequest: [(query) => {
      let ret = '';
      Object.keys(query).forEach((prop) => {
        ret += [
          encodeURIComponent(prop),
          '=',
          typeof query[prop] === 'object' ? JSON.stringify(query[prop]) : query[prop],
          '&',
        ].join('');
      });
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    ...config,
  }));

export const all = axios.all;

export const forData = async (promise) => {
  try {
    return await promise;
  } catch (e) {
    Msg.error(e.code ? `${e.code} ${e.desc}` : `解析错误: ${e.message}`);
    throw e;
  }
};

export const forNews = async (news, promise) => {
  if (typeof news !== 'string') {
    console.log('请传入成功请求时的提示信息');
    return;
  }
  try {
    await promise;
    Msg.success(news);
  } catch (e) {
    Msg.error(e.code ? `${e.code} ${e.desc}` : `解析错误: ${e.message}`);
    throw e;
  }
};

export const debounce = (func, time = 16) =>
  _.debounce(func, time);
