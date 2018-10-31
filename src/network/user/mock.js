import Mock from 'mockjs';
import API from '@/network/api.url';

Mock.mock(RegExp(API.user.login), {
  code: 200,
  message: 'ok',
  data: {
    name: '李顺平',
    id: 1221,
    msgNum: 2,
    role: 'teacher',
  },
});
