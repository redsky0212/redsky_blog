<template>
  <ul class="submenu">
    <li class="" v-for="item in subData" :key="item.id">
      
      <router-link :to="item.link">
        <i class="menu-icon fas fa-caret-right"></i>
        {{item.name}}
      </router-link>

      <b class="arrow"></b>
    </li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import { GnbInfo } from '../../store/modules/gnb';

@Component
export default class LeftMenu extends Vue {
  @Prop() private subData!: GnbInfo[];

  
}
</script>

<style>

</style>