import { GetterTree } from 'vuex';
import {HackerNewsState, RootState, FeedItem} from '@/store/types';

export const getters: GetterTree<HackerNewsState, RootState> = {
  getNewsData(state): FeedItem[] | null {
    const data: FeedItem[] | null = state.newsData;
    return data;
  },
};
