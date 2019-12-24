<template>
  <ul class="submenu">
    <li class="open" v-for="item in subData" :key="item.id">
      
      <router-link :to="item.link">
        <i class="menu-icon fas fa-caret-right"></i>
        {{item.name}}
      </router-link>

      <b class="arrow"></b>

      <sub-menu v-if="item.sub" :sub-data="item.sub" />
    </li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import { GnbInfo } from '../../store/types';


@Component({name:'sub-menu'})
export default class SubMenu extends Vue {
  @Prop() private subData!: GnbInfo[];
}
</script>

<style>

</style>