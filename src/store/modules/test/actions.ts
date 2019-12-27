import { ActionTree } from 'vuex';
import { hackerNewsState, RootState, FeedItem } from '@/store/types';
import { AxiosResponse } from 'axios';
import AxiosService from '@/service/axios.service';

export const actions: ActionTree<hackerNewsState, RootState> = {
  async fetchNews({commit}){
    const newsData:AxiosResponse<FeedItem[]> = await AxiosService.instance.get('/news/1.json');
    commit('newsList', newsData.data);
  },
  async fetchAsk({commit}){
    const askData:AxiosResponse<FeedItem[]> = await AxiosService.instance.get('/ask/1.json');
    commit('askList', askData.data);
  },
  async getDetailItem({commit}, payload){
    const itemData:AxiosResponse<FeedItem[]> = await AxiosService.instance.get(`/item/${payload.id}.json`);
    commit('getItemData', itemData.data);
  }
}
