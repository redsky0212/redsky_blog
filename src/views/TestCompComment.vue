<template>
  <div>
    <div class="message-content" id="id-message-content" style="border-top-width:1px;">
      <div class="message-header clearfix">
        <div class="pull-left">
          <span class="blue bigger-125"> {{itemData? itemData.title:''}} </span>

          <div class="space-4"></div>

          <i class="ace-icon fa fa-star orange2"></i>

          &nbsp;
          <img class="middle" alt="John's Avatar" src="@/assets/images/avatars/avatar2.png" width="32" />
          &nbsp;
          <a href="#" class="sender">{{itemData? itemData.user:''}}</a>

          &nbsp;
          <i class="ace-icon fa fa-clock-o bigger-110 orange middle"></i>
          <span class="time grey" style="padding-left:3px;">{{itemData&&mom.unix(itemData.time).fromNow()}} | {{itemData?itemData.points:0}} points</span>
        </div>

        <div class="pull-right action-buttons">
          <a href="#">
            <i class="ace-icon fa fa-reply green icon-only bigger-130"></i>
          </a>

          <a href="#">
            <i class="ace-icon fa fa-mail-forward blue icon-only bigger-130"></i>
          </a>

          <a href="#">
            <i class="ace-icon fas fa-trash-alt red icon-only bigger-130"></i>
          </a>
        </div>
      </div>

      <div class="hr hr-double"></div>

      <div class="message-body">
        <p>
          <a :href="itemData&&itemData.url" target="_blank">{{itemData&&itemData.url}}</a>
        </p>
        <p>
          {{itemData&&itemData.content}}
        </p>
      </div>

      <div class="hr hr-double"></div>

      <div class="message-attachment clearfix">
        <div class="attachment-title">
          <span class="blue bolder bigger-110">Comments</span>
          &nbsp;
          <span class="grey">(count {{itemData&&itemData.comments_count}})</span>

          <div class="inline position-relative">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">
              &nbsp;
              <i class="ace-icon fa fa-caret-down bigger-125 middle"></i>
            </a>

            <ul class="dropdown-menu dropdown-lighter">
              <li>
                <a href="#">Download all as zip</a>
              </li>

              <li>
                <a href="#">Display in slideshow</a>
              </li>
            </ul>
          </div>
        </div>

        &nbsp;
        <div class="dialogs" v-if="itemData">

          <div v-for="commentItem in itemData.comments" :key="commentItem.id" class="itemdiv dialogdiv">
            <div class="user">
              <img alt="Alexa's Avatar" src="@/assets/images/avatars/avatar2.png" />
            </div>

            <div class="body">
              <div class="time">
                <i class="ace-icon fa fa-clock-o"></i>
                <span class="green">{{mom.unix(commentItem.time).fromNow()}}</span>
              </div>

              <div class="name">
                <a href="#">{{commentItem.user}}</a>
              </div>
              <div class="text" v-html="commentItem.content"></div>

              <div class="tools">
                <a href="#" class="btn btn-minier btn-info">
                  <i class="icon-only ace-icon fa fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div><!-- /.message-content --> 
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import VueRouter, {Route} from 'vue-router';
import { State, namespace, Action, Getter } from 'vuex-class';

import moment, { Moment } from 'moment';
import 'moment/locale/ko';
import { DetailItem } from '../store/types';

const hackerNews = namespace('hackerNews');

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

@Component
export default class TestCompComment extends Vue {
  private id: string = '';
  private mom = moment;
  @hackerNews.State private readonly itemData!: DetailItem;
  @hackerNews.Action private readonly getDetailItem: any;

  private created() {
    this.id = this.$route.query.id as string;
    // this.getDetailItem({id:this.id});
  }

  private beforeRouteEnter(to: Route, from: Route, next: any) {
    const id = to.query.id as string;
    window.console.log(id);
    next((vm: TestCompComment) => {
      vm.getDetailItem({id});
    });
  }
}
</script>

<style>

</style>