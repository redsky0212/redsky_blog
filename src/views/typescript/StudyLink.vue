<template>
  <div>
    <div class="page-header">
      <h1>
        TypeScript 관련 링크
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          TypeScript 관련 여러가지 링크 모음.
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
				<div class="row">
          <div class="col-xs-12">
            <h3>관련 링크 모음</h3>
            <p>
              Typescript 관련 링크
            </p>
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  강좌, 세미나
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b><a href="https://www.youtube.com/watch?v=fgIHrsgvBH4&list=PLV6pYUAZ-ZoEBNDzOxzToMqv-V1QGlU0T" target="_blank">타입스크립트 코리아: 2017.05 기초 세미나 - Youtube</a></b>
                        </li>
                        <li>
                          <b><a href="https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md" target="_blank">hacker news api 링크</a></b>
                        </li>
                        <li>
                          <b><a href="https://honeystorage.tistory.com/36" target="_blank">cafe24에 node서버 구성하기</a></b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- PAGE CONTENT END -->

      </div>
    </div>
  </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class StudyLink extends Vue {

  mounted() {
    window.prettyPrint && prettyPrint();
  }
}
</script>

<style>

</style>