import { MutationTree } from 'vuex';
import {HackerNewsState, FeedItem, DetailItem} from '@/store/types';

export const mutations: MutationTree<HackerNewsState> = {
  newsList(state, payload: FeedItem[] | null) {
    state.newsData = payload;
  },
  askList(state, payload: FeedItem[] | null) {
    state.askData = payload;
  },
  getItemData(state, payload: DetailItem) {
    state.itemData = payload;
  },
};
