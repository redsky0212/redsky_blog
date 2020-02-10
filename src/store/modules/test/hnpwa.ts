import { Module } from 'vuex';
import { RootState } from '@/store/types';
import AxiosService from '@/service/axios.service';
import { AxiosResponse } from 'axios';
import { FeedItem } from '@/store/types';

interface Hnpwa {
  newsData: FeedItem[] | null;
}

const module: Module<Hnpwa, RootState> = {
  namespaced: true,
  state: {
    newsData: null,
  },
  mutations: {
    newsList(state, data: FeedItem[]): void {
      state.newsData = data;
    },
  },
  actions: {
    async getNews({commit}) {
      const newsData: AxiosResponse<FeedItem[]> = await AxiosService.instance.get('/news/1.json');
      commit('newsList', newsData.data);
    },
    async getNewsPaging({commit}) {
      const newsData: AxiosResponse<FeedItem[]> = await AxiosService.instance.post('/news.json/1.json');
      commit('newsList', newsData.data);
    },
  },
  getters: {
  },
};

export default module;

// vuex-module-decorators를 이용하여 class방식으로 store 만들기
// import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
// import { FeedItem } from '@/store/types';
// import Axios, { AxiosResponse, AxiosError } from 'axios';
// import AxiosService from '@/service/axios.service';

// @Module({
//   namespaced: true,
//   name:'Hnpwa',
// })
// export default class Hnpwa extends VuexModule {
//   // state ---------------------------------
//   newsData!: FeedItem[];

//   // mutations --------------------------
//   @Mutation
//   newsList(data:FeedItem[]):void{
//     this.newsData = data;
//   }

//   // action ------------------------------
//   @Action
//   getNews(){

//     // const newsData_action:AxiosResponse<FeedItem[]> = await AxiosService.instance.get('/news/1.json');
//     AxiosService.instance.get('/news/1.json')
//     .then((response:AxiosResponse<FeedItem[]>)=>{
//       this.context.commit('newsList', response.data);
//     })
//     .catch((error:AxiosError)=>{
//       console.error(error);
//     });

//   }
// }
