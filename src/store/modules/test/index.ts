import Vue from 'vue';
import { RootState, HackerNewsState } from '@/store/types';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const namespaced: boolean = true;

export const state: HackerNewsState = {
  newsData: null,
  askData: null,
  itemData: null,
};

export const hackerNews: Module<HackerNewsState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
