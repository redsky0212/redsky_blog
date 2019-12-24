<template>
  <div>
    <div class="page-header">
      <h1>
        Vuex + TypeScript (store module로 분리하기)
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          typescript를 사용하여 vuex store를 module로 분리하여 개발하기
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
				<div class="row">
          <div class="col-xs-12">
            <h3>Vuex + TypeScript = store, module 적용법</h3>
            <p>
              Vuex + TypeScript 를 사용하여 store를 만들고 데이터 성격에 따라 module로 분리하여 적용하는 방법.
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  순서
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>프로젝트 루트에 store폴더를 생성</b>
                        </li>
                        <li>
                          <b>store폴더안에 루트가 되는 index.ts파일을 만든다.</b>
                        </li>
                        <li>
                          <b>프로젝트 루트에 types.ts파일을 생성해서 interface 타입들을 한곳에 모아놓을지 아닐지 상황에 따라 정할수도 있다.</b>
                        </li>
                        <li>
                          <ul class="tree tree-unselectable tree-folder-select" role="tree">
                            <li class="tree-branch" data-template="treebranch" role="treeitem" aria-expanded="false">
                              <div>
                                <i class="icon-caret ace-icon tree-minus"></i>
                                <div class="tree-branch-header" style="height:14px;">
                                  <span class="tree-branch-name">
                                    <i class="icon-folder pink ace-icon fa fa-folder-open"></i>
                                    <span class="tree-label"> store</span>
                                  </span>
                                </div>
                                <ul class="tree-branch-children" role="group">
                                  <li class="tree-branch tree-open" role="treeitem" aria-expanded="true">
                                    <i class="icon-caret ace-icon tree-minus"></i>
                                    <div class="tree-branch-header" style="height:14px;">
                                      <span class="tree-branch-name">
                                        <i class="icon-folder grey ace-icon fa fa-folder-open"></i>
                                        <span class="tree-label"> modules</span>
                                      </span>
                                    </div>
                                    <ul class="tree-branch-children" role="group">
                                      <li class="tree-item" role="treeitem" style="height:14px;">
                                        <span class="tree-item-name">
                                          <span class="tree-label"><i class="ace-icon fa fa-file-text grey"></i> gnb.ts</span>
                                        </span>
                                      </li>
                                      <li class="tree-item" role="treeitem" style="height:14px;">
                                        <span class="tree-item-name">
                                          <span class="tree-label"><i class="ace-icon fa fa-file-text grey"></i> 각 모듈데이터 생성.ts</span>
                                        </span>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="tree-item" role="treeitem" style="height:14px;">
                                    <span class="tree-item-name">
                                      <span class="tree-label"><i class="ace-icon fa fa-file-text grey"></i> index.ts</span>
                                    </span>
                                  </li>
                                  <li class="tree-item" role="treeitem" style="height:14px;">
                                    <span class="tree-item-name">
                                      <span class="tree-label"><i class="ace-icon fa fa-file-text grey"></i> types.ts</span>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>index.ts</b>
                          <pre class="prettyprint linenums">import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';  // rootState interface를 types.ts파일에 따로 정의해 놓았다.
import gnb from '@/store/modules/gnb.ts'; // 따로 만들어 놓은 모듈store를 가져온다.

Vue.use(Vuex);

const store: StoreOptions&lt;RootState&gt; = {
  state: {
    data: 'root',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    gnb,  // 가져온 gnb 데이터 모듈을 셋팅.
  },
};

export default new Vuex.Store(store);
</pre>
                        </li>
                        <li>
                          <b>types.ts</b>
                          <pre class="prettyprint linenums">// root state
export interface RootState {
  data: string;
}

// 좌측메뉴 타입
export interface GnbInfo {
    depth: number;
    id: string;
    name: string;
    iconNm: string;
    link: string;
    sub: GnbInfo[] | null;
  }</pre>
                        </li>
                        <li>
                          <b>gnb 모듈파일 소스</b>
                          <pre class="prettyprint linenums">import { Module } from "vuex";
import { RootState } from '@/store/types';
import {GnbInfo} from '../types';

interface GnbState {
  gnbList: GnbInfo[];
};

const gnb: Module&lt;GnbState, RootState&gt; = {
  namespaced: true,
  state: {
    gnbList: [
      {
        depth: 0,
        id: '0',
        name: '',
        iconNm: '',
        link: '',
        sub: null,
      },
    ],
  },
  mutations: {
    setGnbList(state, data: GnbInfo[]){
      state.gnbList = data;
    }
  },
  actions: {
    setGnbData({commit}, data: GnbInfo[]){
      commit('setGnbList', data);
    }
  },
  getters: {
    gnbList(state){
      return state.gnbList;
    }
  },
}

export default gnb;</pre>
                        </li>
                        <li>
                          <b>gnb.ts파일에 store를 'vuex-module-decorators'를 사용하여 class방식으로 구현한 소스</b>
                          <pre class="prettyprint linenums">import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import {GnbInfo} from '../types';

@Module({
  namespaced:true, 
  name: 'gnb',
})
export default class gnb extends VuexModule {
  // state ---------------------------------------
  gnbList: GnbInfo[] = [
    {
      depth: 0,
      id: '0',
      name: 'vue.js',
      iconNm: 'fab fa-vuejs',
      link: '',
      sub: [
        {
          depth: 1,
          id: '0_0',
          name: 'vue.js 환경설정',
          iconNm: 'fab fa-vuejs',
          link: '/vue/preferences',
          sub: null,
        },
        {
          depth: 1,
          id: '0_1',
          name: 'Vuex',
          iconNm: 'fab fa-vuejs',
          link: '',
          sub: [
            {
              depth: 2,
              id: '0_1_0',
              name: 'Vuex + Typescript',
              iconNm: 'fab fa-vuejs',
              link: '',
              sub: [
                {
                  depth: 3,
                  id: '0_1_0_0',
                  name: 'store만들기',
                  iconNm: 'fab fa-vuejs',
                  link: '/vue/vuex/typescript/makeStore',
                  sub: null
                },
                {
                  depth: 3,
                  id: '0_1_0_1',
                  name: 'modules,store분리',
                  iconNm: 'fab fa-vuejs',
                  link: '/vue/vuex/typescript/moduleStore',
                  sub: null
                }
              ]
            }
          ]
        },
      ],
    },
    {
      depth: 0,
      id: '1',
      name: 'react.js',
      iconNm: 'fab fa-react',
      link: '',
      sub: null,
    },
    {
      depth: 0,
      id: '2',
      name: 'javascript',
      iconNm: 'fab fa-js',
      link: '',
      sub: null,
    },
  ];

  // mutations -----------------------------------
  @Mutation
  setGnbList(data: GnbInfo[]){
    this.gnbList = data;
  }

  // actions -------------------------------------
  @Action
  setGnbData(data: GnbInfo[]){
    this.context.commit('setGnbList', data);
  }

  // getters -------------------------------------
  get getGnbList(){
    return this.gnbList;
  }
}</pre>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
				</div>
        <!-- PAGE CONTENT END -->
      
      </div>
    </div>
  </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class VueEtc extends Vue {

  mounted() {
    window.prettyPrint && prettyPrint();
  }
}
</script>

<style>

</style>