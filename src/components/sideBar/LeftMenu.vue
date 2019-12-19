<template>
  <ul class="nav nav-list">
    <li class="" v-for="gnbItem in gnbList" :key="gnbItem.id">
      <a v-if="gnbItem.link===''" href="#" :class="{'dropdown-toggle':gnbItem.sub}">
        <i :class="['menu-icon', gnbItem.iconNm]"></i>
        <span class="menu-text">{{gnbItem.name}}</span>
        <b :class="{'arrow fa fa-angle-down':gnbItem.sub}"></b>
      </a>
      <router-link v-else :to="gnbItem.link" :class="{'dropdown-toggle':gnbItem.sub}">
        <i :class="['menu-icon', gnbItem.iconNm]"></i>
        <span class="menu-text">{{gnbItem.name}}</span>
        <b :class="{'arrow fa fa-angle-down':gnbItem.sub}"></b>
      </router-link>

      <b class="arrow"></b>

      <sub-menu v-if="gnbItem.sub" :sub-data="gnbItem.sub" />

    </li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {mapState} from 'vuex';
import { GnbInfo } from '../../store/modules/gnb';
import {State} from 'vuex-class';

import SubMenu from '@/components/sideBar/SubMenu.vue';

@Component({
  components: {
    SubMenu,
  },
  computed: mapState('gnb', ['gnbList']),
})
export default class LeftMenu extends Vue {
  // ts내에서 쓰기위한 data 선언
  gnbList!: GnbInfo[];

  private mounted(){
    console.log(this.gnbList);
  }
}
</script>

<style>

</style>