<template>
  <div>
    <div>{{testComputed}}</div>
    <button @click="add">add count</button>
    <button @click="getNews">get news</button>
    <ul>
      <li v-for="item in newsData" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { State, namespace, Action } from 'vuex-class';
import { FeedItem } from '../store/types';

const hnpwa = namespace('hnpwa');

@Component
export default class TestComp extends Vue {
  public count:number = 0;
  public newsList:any = this.$store.state.hnpwa.newsData;
  @hnpwa.State readonly newsData!: FeedItem[]; 

  @hnpwa.Action readonly getNews: any;

  // computed
  get testComputed(){
    console.log('call Test!!!');
    
    return this.count;
  }

  created(){
    //this.$store.dispatch('hnpwa/getNews');
    this.getNews();
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