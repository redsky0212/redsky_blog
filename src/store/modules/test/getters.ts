import { GetterTree } from 'vuex';
import {hackerNewsState, RootState, FeedItem} from '@/store/types';

export const getters: GetterTree<hackerNewsState, RootState> = {
  getNewsData(state): FeedItem[] | null {
    const data: FeedItem[] | null = state.newsData;
    return data;
  },
};
