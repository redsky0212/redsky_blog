import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import gnb from '@/store/modules/gnb.ts';
import hnpwa from '@/store/modules/test/hnpwa.ts';

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
    hnpwa,
  },
};

export default new Vuex.Store(store);
