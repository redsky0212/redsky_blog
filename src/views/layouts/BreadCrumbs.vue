<template>
  <div class="breadcrumbs ace-save-state breadcrumbs-fixed" id="breadcrumbs">
    <ul class="breadcrumb">
      <li>
        <i class="ace-icon fa fa-home home-icon"></i>
        <a href="#">Home</a>
      </li>

      <li>
        <a href="#">Forms</a>
      </li>
      <li class="active">Form Elements</li>
    </ul><!-- /.breadcrumb -->

    <div class="nav-search" id="nav-search">
      <form class="form-search">
        <span class="input-icon">
          <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
          <i class="ace-icon fa fa-search nav-search-icon"></i>
        </span>
      </form>
    </div><!-- /.nav-search -->
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class BreadCrumbs extends Vue {

}
</script>

<style>

</style>