<template>
  <div>
    <div>{{testComputed}}</div>
    <button @click="add">add count</button>
    <button @click="fetchNews">get news</button>
    <ul>
      <li v-for="item in getNewsData" :key="item.id">{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="item in askData" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { State, namespace, Action, Getter } from 'vuex-class';
import { FeedItem } from '../store/types';

const hackerNews = namespace('hackerNews');

@Component
export default class TestComp extends Vue {
  public count:number = 0;
  public newsList:any = this.$store.state.hackerNews.newsData;
  
  //@hackerNews.State readonly newsData!: FeedItem[]; 
  @hackerNews.State newsData!: FeedItem[];
  @hackerNews.State askData!: FeedItem[];
  @hackerNews.Getter getNewsData!: FeedItem[];

  @hackerNews.Action readonly fetchNews: any;
  @hackerNews.Action readonly fetchAsk: any;

  // computed
  get testComputed(){
    console.log('call Test!!!');
    
    return this.count;
  }

  created(){
    //this.$store.dispatch('hnpwa/getNews');
    this.fetchNews();
    this.fetchAsk();
  }

  // method
  private add(){
    this.count++;
  }
  // private getNewsAction(){
  //   this.$store.dispatch('hnpwa/getNews');
  // }
}
</script>

<style>

</style>