<template>
  <div id="sidebar" class="sidebar                  responsive                    ace-save-state sidebar-fixed">
    

    <div class="sidebar-shortcuts" id="sidebar-shortcuts" style="padding:3px;">

      <div class="input-group">
        <input type="text" class="form-control search-query" placeholder="Search..." />
        <span class="input-group-btn">
          <button type="button" class="btn btn-purple btn-sm">
            <span class="ace-icon fa fa-search icon-on-right bigger-110"></span>
          </button>
        </span>
      </div>

    </div><!-- /.sidebar-shortcuts -->

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