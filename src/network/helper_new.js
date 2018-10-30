/* eslint-disable */
// axios 文档见: https://www.kancloud.cn/yunye/axios/234845
import axios from 'axios'
import { Msg } from '@/helper/element_ui'
import _ from 'lodash'

/**
 * 目的在于 将返回的数据 提取出来
 */
// DEBUG_ENV：判定是否是调试环境，在 VUE1 中也可以打印网络请求的 mock 信息
const DEBUG_ENV = process.env.NODE_ENV === 'development' || ~location.origin.search(/localhost|127.0.0.1/)
const extract = async promise => {
  try {
    const RESULT = await promise
    var { data: { ret, retCode, retDesc }, config } = RESULT
    // 针对POST请求
    if (config.method === 'post') {
      var { data } = RESULT
      if (data) {
        ret = data.ret
        retCode = data.retCode
        retDesc = data.retDesc
      }
      var PARAMS = {}
      if (config.data) {
        decodeURIComponent(config.data).split('&').forEach(val => {
          if (val) {
            const ARR = val.split('=')
            PARAMS[ARR[0]] = ARR[1]
          }
        })
      }
    }
  } catch (e) {
    throw Object({
      code: e.response && e.response.status,
      desc: e.response && e.response.statusText,
      message: e.message
    })
  }

  // 打印请求结果，由于依赖process.env.NODE_ENV编译，在vue1中不显示
  if (DEBUG_ENV) {
    console.log(
      '%c' + config.url,
      'color: ' + (+retCode === 200 ? '#02c092' : '#ff6246'),
      {
        params: config.method !== 'post' ? config.params : PARAMS,
        result: ret
      }
    )
  }

  if (+retCode === 200) return ret
  else throw Object({ ret, code: retCode, desc: retDesc })
}

// 清除值为 undefined、null、空字符串的参数
const clear = obj => {
  return _.pickBy(obj, (val, key) => {
    return !_.isNil(val, key) && val !== ''
  })
}

export const get = (url, params, config) => extract(
  axios.get(url, {
    params: clear(params),
    ...config
  })
)

export const post = (url, data, config) => extract(
  axios.post(url, clear(data), {
    transformRequest: [function (data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + (typeof data[it] === 'object' ? JSON.stringify(data[it]) : data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...config
  })
)

export const postNative = (url, data, config) => extract(
  axios.post(url, data, {
    transformRequest: [function (data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + (typeof data[it] === 'object' ? JSON.stringify(data[it]) : data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...config
  })
)

export const postFile = (url, data) => {
  const formData = new FormData()
  for (const prop in data) {
    formData.append(prop, data[prop])
  }
  return extract(
    axios.post(url, formData)
  )
}

export const all = axios.all

/**
 * 对接口消息返回 失败 进行通知
 * , 失败会使用 retDesc 的内容
 * , 和下面的 forNews 的区别是 成功不通知 用于刷新列表之类的地方
 * @param {Promise} promise - 请求
 * @return {Promise}
 */
export const forData = async promise => {
  try {
    return await promise
  } catch (e) {
    Msg.error(e.code ? `${e.code} ${e.desc}` : `解析错误: ${e.message}`)
    throw e
  }
}

/**
 * 对接口消息返回 成功失败 进行通知
 * , 成功会显示 successNews
 * , 失败会使用 retDesc 的内容
 * @param {string | Object} news
 * - 动作执行显示的消息 有两种形式:
 * - {string} 成功消息
 * - {object} {200: '成功',503:'没有权限',...} 这种情景不多 最好让后台配好 retDesc
 * @param {Promise} promise - 请求
 * @return {Promise}
 */
export const forNews = async (news, promise) => {
  try {
    const ret = await promise
    const successNews =
      typeof news === 'string'
      ? news
      : news[200]

    Msg.success(successNews)

    return ret
  } catch (e) {
    const errorNews =
      e.code
      ? typeof news !== 'string' && news[e.code]
        ? news[e.code]
        : `${e.code} ${e.desc}`
      : `解析错误: ${e.message}`

    Msg.error(errorNews)

    throw e
  }
}

/**
 * forData 和 forNews 的区别可以理解为
 * 只查询的是 forData
 * 修改服务器数据的 通常是 forNews
 * 因为 修改服务器数据 在页面上不容易看出来 才需要成功提示
 */

/**
 * 用于被侦听对象频繁改变时节流，不希望页面中单独引用lodash，所以提取出来
 */
export const debounce = (func, time = 16) => {
  return _.debounce(func, time)
}

/**
 * 对 table 数据进行处理
 * @param {*} mapfunc
 */
export const tableMap = mapfunc =>
  ({ paginationInfo, result }) => ({
    paginationInfo,
    result: result.map(row => ({
      ...row,
      ...mapfunc(row)
    }))
  })
