<template>
  <ul class="submenu">
    <li class="" v-for="item in subData" :key="item.id">
      
      <a href="#" v-if="item.link===''" @click="onMenuClick">
        <i class="menu-icon fas fa-caret-right"></i>
        {{item.name}}
        <b :class="{'arrow fa fa-angle-down':item.sub}"></b>
      </a>
      <router-link v-else :to="item.link" @click.native="onMenuClick">
        <i class="menu-icon fas fa-caret-right"></i>
        {{item.name}}
        <b :class="{'arrow fa fa-angle-down':item.sub}"></b>
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

  // event
  private onMenuClick(event: Event) {
    const target: HTMLElement = event.currentTarget as HTMLElement;
    const parent: HTMLElement = target.parentElement as HTMLElement;
    const ulElem: HTMLElement = parent.querySelector('ul.submenu') as HTMLElement;
   
    if ( parent.nodeName === 'LI' && ulElem ) {
      if ( parent.className === 'open' ) {
        parent.className = '';
        ulElem.className += ' nav-hide';
        ulElem.style.display = 'none';
        ulElem.style.height = '0';
      } else {
        parent.className = 'open';
        ulElem.className += ' nav-show';
        ulElem.style.display = 'block';
        ulElem.style.height = 'auto';
      }
      ulElem.style.transitionProperty = 'height';
      ulElem.style.transitionDuration = '0.35s';

    }

  }
}
</script>

<style>

</style>