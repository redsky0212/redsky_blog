import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import gnb from '@/store/modules/gnb.ts';
// import Hnpwa from '@/store/modules/test/Hnpwa.ts';
import { hackerNews } from '@/store/modules/test';

Vue.use(Vuex);



const store: StoreOptions<RootState> = {
  state: {
    data: 'root',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gnb,
    hackerNews,
  },
};

export default new Vuex.Store(store);
