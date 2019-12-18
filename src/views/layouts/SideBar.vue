<template>
  <div id="sidebar" class="sidebar                  responsive                    ace-save-state sidebar-fixed">
    

    

    <left-menu /><!-- /.nav-list -->

    <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
      <i id="sidebar-toggle-icon" style="padding: 0 4px 0 3px;" class="ace-icon fas fa-angle-double-left ace-save-state" data-icon1="ace-icon fas fa-angle-double-left" data-icon2="ace-icon fas fa-angle-double-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

import LeftMenu from '@/components/sideBar/LeftMenu.vue';

@Component({
  components: {
    LeftMenu,
  },
})
export default class SideBar extends Vue {
}
</script>

<style>

</style>