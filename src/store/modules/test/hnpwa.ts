import { Module } from "vuex";
import { RootState } from '@/store/types';
import AxiosService from '@/service/axios.service';
import { AxiosResponse } from 'axios';
import { FeedItem } from '@/store/types';

interface hnpwa {
  newsData: FeedItem[] | null;
};

const module: Module<hnpwa, RootState> = {
  namespaced: true,
  state: {
    newsData: null,
  },
  mutations: {
    newsList(state, data: FeedItem[]):void{
      state.newsData = data;
    }
  },
  actions: {
    async getNews({commit}){
      const newsData:AxiosResponse<FeedItem[]> = await AxiosService.instance.get('/news/1.json');
      commit('newsList', newsData.data);
    },
  },
  getters: {
  },
}

export default module;

// vuex-module-decorators를 이용하여 class방식으로 store 만들기