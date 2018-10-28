import Mock from 'mockjs'
import { formatDate, formatMoment } from '@/helper/moment'
// Mockjs 文档见 https://github.com/nuysoft/Mock/wiki

Mock.setup({
  timeout: '100-1000'
})

const roleNames = ['投顾', '组长', '管理员', '超级管理员', '质检员', '回访', '运营策划', '经理', '录音调听']
const groupNames = ['微信后端2组', '前端2组', '前端3组', '前端15组', '前端12组', '前端1组', '后端2组', '后端3组', '前端9组', '前端10组', '前端11组', '前端8组', '测试组', '培训', '外推直销', '前端4组', '前端14组', '后端资源回收', '临时资源存放', '黑名单用户存放', '微信后端1组', '微信前端1组', '微信前端2组', '微信前端3组', '兆维投顾小组', '前端7组', '前端5组', '后端4组', '微信前端4组']

let seriesTimeStart = Date.now()
let seriesTimeCount = 100
const formmatTime = (date, formmat) => {
  const dateObj = new Date(date)
  if (formmat === 'yyyy.MM.dd') {
    return formatDate(dateObj, 'yyyy.MM.dd')
  } else if (formmat === 'hh:mm:ss') {
    return formatMoment(dateObj)
  }
}
const seriesTime = (formmat) => {
  const now = Date.now()
  if (now - seriesTimeStart > 42) {
    seriesTimeStart = now
    seriesTimeCount = 100
  }
  seriesTimeCount--
  switch (formmat) {
    case 'yyyy.MM.dd':
      return formmatTime(seriesTimeStart - seriesTimeCount * 8.64e7, 'yyyy.MM.dd')
    case 'hh:mm:ss':
      return formmatTime(seriesTimeStart - seriesTimeCount * 4.2e5, 'hh:mm:ss')
  }
}

let gradientStart = 0
let gradientCount = 0
const gradient = (start, step, maxCount = 30) => {
  if (gradientCount > maxCount) {
    gradientStart = start
    gradientCount = 0
  }
  gradientStart += step * 2 * Math.random()
  gradientCount++
  return gradientStart.toFixed(2)
}

Mock.Random.extend({
  /** 生成一个n位的ID 默认为4位 */
  id: function (number = 4) {
    return this.natural(
      Math.pow(10, number - 1),
      Math.pow(10, number) - 1)
  },

  /** 生成一个ID列表 ID默认为4位 逗号分隔 */
  ids: function (number = 4, split = ',') {
    return Array.from({ length: this.natural(5, 10) })
                .map(_ => this.id(number))
                .join(',')
  },

  // 生成用逗号分割的字符串
  tags: function (split = ',') {
    // const firstParts = ['客户', '交易所', '投顾', '分析师', '金额', '渠道']
    // const centerParts = ['价值', '分类', '行为', '特征', '风格', '投资', '类型', '资产']
    // const lastParts = ['高', '中', '低', '一般']
    return Array.from({
      length: this.natural(3, 7)
    }).map(_ =>
      this.cword(3, 6)
    ).join(',')
  },

  /** 为了语义 声明一个枚举参数 */
  enum: (...list) => Mock.Random.pick(list),

  mail: function () {
    return this.word(10, 15) + '@corp.netease.com'
  },

  groupName: () => Mock.Random.pick(groupNames),

  roleName: () => Mock.Random.pick(roleNames),

  empId: function () {
    return 'C' + this.natural(1001, 9999)
  },

  seriesTime: formmat => seriesTime(formmat),

  gradient: (start, step) => gradient(start, step)
})

const findRe = key => '' + key + '=([^&?]*)'
const findValue = (url, key) => (url.match(new RegExp(findRe(key))) || [])[1]

/**
 * 生成可以响应请求的 table mock
 * @param {Object} mockTemplate mock 模板
 * @param {number} fixedSize 固定列表的长度
 * @param {string} result 数据列表的键 有的接口这个键不是固定的
 */
Mock.table = (mockTemplate, fixedRecordPerPage, key = 'result') => ({ url }) => {
  let recordPerPage = fixedRecordPerPage !== undefined ? fixedRecordPerPage : +findValue(url, 'recordPerPage') || 10
  recordPerPage = recordPerPage >= 100 ? 100 : recordPerPage
  const pageNum = +findValue(url, 'pageNum') || 1

  const totalPage = Math.floor(Math.random() * 5) + 1

  const ret = {
    retCode: 200,
    retDesc: 'ok',
    ret: {
      paginationInfo: {
        currentPage: pageNum,
        recordPerPage,
        totalPage,
        totalRecord: (totalPage - 1) * recordPerPage + 3
      }
    }
  }

  ret.ret[key] = totalPage
      ? Array.from({ length: recordPerPage })
          .map(_ => Mock.Handler.gen(mockTemplate))
      : []
    // Mock.Handler.gen: 用 template 生成数据

  return ret
}
