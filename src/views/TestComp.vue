<template>
  <div>
    <div>{{timeTest}}</div>
    <div>{{testComputed}}</div>
    <button @click="add">add count</button>
    <button @click="fetchNews">get news</button>

    <div class="widget-box transparent">
      <div class="widget-header widget-header-small">
        <h4 class="widget-title blue smaller">
          <i class="ace-icon fas fa-rss orange"></i>
          Hacker News
        </h4>

        <div class="widget-toolbar action-buttons">
          <a href="#" data-action="reload">
            <i class="ace-icon fa fa-refresh blue"></i>
          </a>
&nbsp;
          <a href="#" class="pink">
            <i class="ace-icon fas fa-trash-alt"></i>
          </a>
        </div>
      </div>
      <div class="widget-body">
        <div class="widget-main padding-8">
          <div id="profile-feed-1" class="profile-feed">

            <div v-for="item in getNewsData" :key="item.id" class="profile-activity clearfix">
              <div>
                <i class="pull-left thumbicon fa fa-pencil-square-o btn-pink no-hover"></i>
                <a class="user" href="#"> {{item.user}} </a>
                {{item.title}}
                <a :href="item.url" target="_blank">Take a look</a>

                <div class="time">
                  <i class="ace-icon fa fa-clock-o bigger-110"></i>
                  {{mom.unix(item.time).fromNow()}} | {{item.points}} points | <router-link :to="{path:'/test/comment', query:{id:item.id}}">{{item.comments_count}} comments</router-link>
                </div>
              </div>

              <div class="tools action-buttons">
                <a href="#" class="blue">
                  <i class="ace-icon fas fa-pencil-alt bigger-125"></i>
                </a>

                <a href="#" class="red">
                  <i class="ace-icon fa fa-times bigger-125"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    
    <ul>
      <li v-for="item in askData" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { State, namespace, Action, Getter } from 'vuex-class';
import { FeedItem } from '../store/types';

import moment, { Moment } from 'moment';
import 'moment/locale/ko';

const hackerNews = namespace('hackerNews');

@Component
export default class TestComp extends Vue {
  public count:number = 0;
  public newsList:any = this.$store.state.hackerNews.newsData;
  public timeTest!:string;
  private mom = moment;
  
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

    this.timeTest = moment.unix(1577403775).fromNow();
  }

  mounted(){
    
  }

  // method
  private add(){
    this.count++;
  }
  private time_ago( time:number ):string{
    return moment.unix(time).fromNow();
  }
}
</script>

<style>

</style>