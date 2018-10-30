import Mock from 'mockjs';
import * as API from '@/network/api.url';

Mock.mock(RegExp(API.user.login), {
  retCode: 200,
  retDesc: 'ok',
  ret: {
    name: '李顺平',
    id: 1221,
    msgNum: 2,
  },
})
