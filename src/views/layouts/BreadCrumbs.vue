<template>
  <div class="breadcrumbs ace-save-state breadcrumbs-fixed" id="breadcrumbs">
    <ul class="breadcrumb">

      <li v-for="(item, index) in crumbs" :key="index" :class="{active: index+1 === crumbs.length}">
        <i v-if="index===0" class="ace-icon fa fa-home home-icon"></i>
        <template v-if="index+1 === crumbs.length">{{item.text}}</template>
        <router-link v-else :to="item.to">{{item.text}}</router-link>
      </li>

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

@Component({
  computed: {
    crumbs() {
      window.console.log('call' + this.$route.path);
      const pathArray = this.$route.path.split('/');
      pathArray.shift();

      const breadcrumbs = pathArray.reduce((breadcrumbArray: any, path, idx) => {
        breadcrumbArray.push({
          path,
          to: breadcrumbArray[idx - 1]
            ? ('/' + breadcrumbArray[idx - 1].path + '/' + path)
            : ('/' + path),
          text: path,
        });
        return breadcrumbArray;
      }, [
        {path: '/', to: '/', text: 'Home'},
      ]);
      return breadcrumbs;
    },
  },
})
export default class BreadCrumbs extends Vue {
}
</script>

<style>

</style>