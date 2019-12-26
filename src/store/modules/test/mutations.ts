import { MutationTree } from 'vuex';
import {hackerNewsState, FeedItem} from '@/store/types';

export const mutations: MutationTree<hackerNewsState> = {
  newsList(state, payload: FeedItem[] | null){
    state.newsData = payload;
  },
  askList(state, payload: FeedItem[] | null){
    state.askData = payload;
  },
};