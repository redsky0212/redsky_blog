<template>
  <div id="app">
    <header-bar />
    <div class="main-container ace-save-state" id="main-container">  
      <side-bar />
      <div class="main-content">
        <div class="main-content-inner">
          <bread-crumbs />
          <div class="page-content">
            <router-view/>
          </div>
        </div>
      </div>
      <footer-bar />
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import HeaderBar from './views/layouts/HeaderBar.vue';
import SideBar from './views/layouts/SideBar.vue';
import BreadCrumbs from './views/layouts/BreadCrumbs.vue';
import FooterBar from './views/layouts/FooterBar.vue';

@Component({
  components: {
    HeaderBar,
    SideBar,
    BreadCrumbs,
    FooterBar,
  },
})
export default class App extends Vue {
}
</script>


