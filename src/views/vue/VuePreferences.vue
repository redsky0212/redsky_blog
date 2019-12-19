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
				<div class="row">
          <div class="col-xs-12">
            <h4>Vue.js 개발을 위한 기본 셋팅</h4>
            <hr />
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  기본 개발 환경 설정
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          node.js설치
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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