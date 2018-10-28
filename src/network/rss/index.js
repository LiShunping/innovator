import API from '@/network/api.url';
import { get } from '@/network/helper';

const list = () => get(API.rss.test, {});

export const Rss = {
  list,
};

export const Rss1 = {
  list,
};
