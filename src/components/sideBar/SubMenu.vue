<template>
  <ul class="submenu nav-show" style="display:block;">
    <li class="active" v-for="item in subData" :key="item.id">
      <a href="form-elements.html">
        <i class="menu-icon fas fa-caret-right"></i>
        {{item.name}}
      </a>

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