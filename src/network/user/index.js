import API from '@/network/api.url';
import { get } from '@/network/helper';

const my = params => get(API.user.login, params);

export default {
  my,
};
