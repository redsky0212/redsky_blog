<template>
  <fragment>
    <div class="main-content">
      <div class="main-content-inner">
        <bread-crumbs />
        <div class="page-content">
        redsky blog home !
        </div>
        <div style="height:3000px;"></div>
      </div>
    </div>
    <footer-bar />
  </fragment>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator';
import BreadCrumbs from '@/views/layouts/BreadCrumbs.vue';
import FooterBar from '@/views/layouts/FooterBar.vue';

import { Fragment } from 'vue-fragment';
@Component({
  components: {
    BreadCrumbs,
    FooterBar,
    Fragment,
  },
})
export default class MainLayout extends Vue {

}
</script>