import { MutationTree } from 'vuex';
import {hackerNewsState, FeedItem, detailItem} from '@/store/types';

export const mutations: MutationTree<hackerNewsState> = {
  newsList(state, payload: FeedItem[] | null) {
    state.newsData = payload;
  },
  askList(state, payload: FeedItem[] | null) {
    state.askData = payload;
  },
  getItemData(state, payload: detailItem) {
    state.itemData = payload;
  },
};
