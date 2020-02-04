import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import {GnbInfo} from '../types';

@Module({
  namespaced: true,
  name: 'gnb',
})
export default class gnb extends VuexModule {
  // state ---------------------------------------
  public gnbList: GnbInfo[] = [
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
          sub: [
            {
              depth: 2,
              id: '0_0_0',
              name: 'vue CLI 3',
              iconNm: 'fab fa-vuejs',
              link: '/vue/preferences/cli',
              sub: [
                {
                  depth: 3,
                  id: '0_0_0_0',
                  name: 'vue aaa',
                  iconNm: 'fab fa-vuejs',
                  link: '/vue/preferences/aa',
                  sub: null,
                },
              ],
            },
          ],
        },
        {
          depth: 1,
          id: '0_1',
          name: 'Vue 이해하기',
          iconNm: 'fab fa-vuejs',
          link: '',
          sub: [
            {
              depth: 2,
              id: '0_1_0',
              name: 'Slot',
              iconNm: 'fab fa-vuejs',
              link: '/vue/understand/slot',
              sub: null,
            },
            {
              depth: 2,
              id: '0_1_1',
              name: 'vmodel',
              iconNm: 'fab fa-vuejs',
              link: '/vue/understand/component/vmodel',
              sub: null,
            },
            {
              depth: 2,
              id: '0_1_2',
              name: 'mixin',
              iconNm: 'fab fa-vuejs',
              link: '/vue/understand/mixin',
              sub: null,
            },
          ],
        },
        {
          depth: 1,
          id: '0_2',
          name: 'Vuex',
          iconNm: 'fab fa-vuejs',
          link: '',
          sub: [
            {
              depth: 2,
              id: '0_2_0',
              name: 'Vuex + Typescript',
              iconNm: 'fab fa-vuejs',
              link: '',
              sub: [
                {
                  depth: 3,
                  id: '0_2_0_0',
                  name: 'store만들기',
                  iconNm: 'fab fa-vuejs',
                  link: '/vue/vuex/typescript/makeStore',
                  sub: null,
                },
                {
                  depth: 3,
                  id: '0_2_0_1',
                  name: 'modules,store분리',
                  iconNm: 'fab fa-vuejs',
                  link: '/vue/vuex/typescript/moduleStore',
                  sub: null,
                },
              ],
            },
          ],
        },
        {
          depth: 1,
          id: '0_3',
          name: 'vue.js 잡다구리',
          iconNm: 'fab fa-vuejs',
          link: '/vue/etc',
          sub: null,
        },
        {
          depth: 1,
          id: '0_4',
          name: 'vue.js test code',
          iconNm: 'fab fa-vuejs',
          link: '/vue/testCode',
          sub: null,
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
    {
      depth: 0,
      id: '3',
      name: 'TypeScript',
      iconNm: 'fab fa-js',
      link: '',
      sub: [
        {
          depth: 1,
          id: '3_0',
          name: 'TypeScript 링크모음',
          iconNm: 'fab fa-js',
          link: '/typescript/studyLink',
          sub: null,
        },
      ],
    },
    {
      depth: 0,
      id: '4',
      name: 'TestComp',
      iconNm: 'fab fa-js',
      link: '/test',
      sub: null,
    },
  ];

  // mutations -----------------------------------
  @Mutation
  public setGnbList(data: GnbInfo[]) {
    this.gnbList = data;
  }

  // actions -------------------------------------
  @Action
  public setGnbData(data: GnbInfo[]) {
    this.context.commit('setGnbList', data);
  }

  // getters -------------------------------------
  get getGnbList() {
    return this.gnbList;
  }
}


// import { Module } from "vuex";
// import { RootState } from '@/store/types';

// export interface GnbInfo {
//   depth: number;
//   id: string;
//   name: string;
//   iconNm: string;
//   link: string;
//   sub: GnbInfo[] | null;
// }
// interface GnbState {
//   gnbList: GnbInfo[];
// };

// const gnb: Module<GnbState, RootState> = {
//   namespaced: true,
//   state: {
//     gnbList: [
//       {
//         depth: 0,
//         id: '0',
//         name: 'vue.js',
//         iconNm: 'fab fa-vuejs',
//         link: '',
//         sub: [
//           {
//             depth: 1,
//             id: '0_0',
//             name: 'vue.js 환경설정',
//             iconNm: 'fab fa-vuejs',
//             link: '/vue/preferences',
//             sub: [
//               {
//                 depth: 2,
//                 id: '0_0_0',
//                 name: 'vue CLI 3',
//                 iconNm: 'fab fa-vuejs',
//                 link: '/vue/preferences/cli',
//                 sub: [
//                   {
//                     depth: 3,
//                     id: '0_0_0_0',
//                     name: 'vue aaa',
//                     iconNm: 'fab fa-vuejs',
//                     link: '/vue/preferences/aa',
//                     sub: null,
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             depth: 1,
//             id: '0_1',
//             name: 'vue.js 잡다구리',
//             iconNm: 'fab fa-vuejs',
//             link: '/vue/etc',
//             sub: null
//           },
//         ],
//       },
//       {
//         depth: 0,
//         id: '1',
//         name: 'react.js',
//         iconNm: 'fab fa-react',
//         link: '',
//         sub: null,
//       },
//       {
//         depth: 0,
//         id: '2',
//         name: 'javascript',
//         iconNm: 'fab fa-js',
//         link: '',
//         sub: null,
//       },
//       {
//         depth: 0,
//         id: '3',
//         name: 'TestComp',
//         iconNm: 'fab fa-js',
//         link: '/test',
//         sub: null,
//       },
//     ],
//   },
//   mutations: {
//     setGnbList(state, data: GnbInfo[]){
//       state.gnbList = data;
//     }
//   },
//   actions: {
//     setGnbData({commit}, data: GnbInfo[]){
//       commit('setGnbList', data);
//     }
//   },
//   getters: {
//     gnbList(state){
//       return state.gnbList;
//     }
//   },
// }

// export default gnb;


