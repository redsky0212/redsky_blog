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
// import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
// import { FeedItem } from '@/store/types';
// import { AxiosResponse } from 'axios';
// import AxiosService from '@/service/axios.service';

// @Module({
//   namespaced: true,
//   name:'hnpwa',
// })
// export default class hnpwa extends VuexModule {
//   // state ---------------------------------
//   newsData!: FeedItem[];

//   // mutations --------------------------
//   @Mutation
//   newsList(data:FeedItem[]):void{
//     this.newsData = data;
//   }

//   // action ------------------------------
//   @Action({commit:'newsList'})
//   async function getNews():FeedItem[]{
   
//     const newsData_action:AxiosResponse<FeedItem[]> = await AxiosService.instance.get('/news/1.json');
//     return newsData_action.data;
//   }
// }