<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="footer-content">
        <span class="bigger-120">
          <span class="blue bolder">Ace</span>
          Application &copy; 2013-2014
        </span>

        &nbsp; &nbsp;
        <span class="action-buttons">
          <a href="#">
            <i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
          </a>

          <a href="#">
            <i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
          </a>

          <a href="#">
            <i class="ace-icon fa fa-rss-square orange bigger-150"></i>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class FooterBar extends Vue {

}
</script>

<style>

</style>