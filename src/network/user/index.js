import API from '@/network/api.url';
// import { get } from '@/network/helper_new';
import { get } from '@/network/helper';

const login = params => get(API.user.login, params);

export default {
  login,
};
