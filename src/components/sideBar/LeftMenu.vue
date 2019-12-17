<template>
  <ul class="nav nav-list">
    <li class="active" v-for="gnbItem in gnb" :key="gnbItem.id">
      <a href="#" :class="{'dropdown-toggle':gnbItem.sub}">
        <i :class="['menu-icon', gnbItem.iconNm]"></i>
        <span class="menu-text">{{gnbItem.name}}</span>
        <b :class="{'arrow fa fa-angle-down':gnbItem.sub}"></b>
      </a>

      <b class="arrow"></b>

      <sub-menu v-if="gnbItem.sub" :subdata="gnbItem.sub" />

    </li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {mapState} from 'vuex';
import { GnbInfo } from '@/store/modules/gnb';
import {State} from 'vuex-class';

import SubMenu from '@/components/sideBar/SubMenu.vue';

@Component({
  components: {
    SubMenu,
  },
  computed: mapState('gnb', ['gnbList']),
})
export default class LeftMenu extends Vue {
  // 데이터
  @State((state) => state.gnb.gnbList)
  private gnb!: GnbInfo[];
}
</script>

<style>

</style>