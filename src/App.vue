<template>
  <div id="app">
    <header-bar />
    <div class="main-container ace-save-state" id="main-container">  
      <side-bar />
      <router-view/>
    </div>
    
    
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import HeaderBar from '@/views/layouts/HeaderBar.vue';
import SideBar from '@/views/layouts/SideBar.vue';

@Component({
  components: {
    HeaderBar,
    SideBar,
  },
})
export default class App extends Vue {
}
</script>


