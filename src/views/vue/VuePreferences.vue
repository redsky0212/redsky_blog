<template>
  <div>
    <div class="page-header">
      <h1>
        Vue.js 환경설정
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          webpack &amp; Vue CLI 3 &amp; ETC
        </small>
      </h1>
    </div><!-- /.page-header -->

    <div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->
								<div class="alert alert-block alert-success">
									<button type="button" class="close" data-dismiss="alert">
										<i class="ace-icon fa fa-times"></i>
									</button>

									<i class="ace-icon fa fa-check green"></i>

									Welcome to
									<strong class="green">
										Ace
										<small>(v1.4)</small>
									</strong>,
	лёгкий, многофункциональный и простой в использовании шаблон для админки на bootstrap 3.3.6. Загрузить исходники с <a href="https://github.com/bopoda/ace">github</a> (with minified ace js/css files).
								</div>
							</div>
    </div>

  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class VuePreferences extends Vue {}
</script>

<style>

</style>