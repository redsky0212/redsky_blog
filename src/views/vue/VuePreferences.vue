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
            <h2>Vue.js 개발을 위한 기본 셋팅</h2>
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
                          <b>node.js설치 (<a href="https://nodejs.org/ko/" target="_blank">https://nodejs.org/ko/</a>)</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              nodejs가 설치 되어있지 않다면 설치한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>git 설치 (<a href="https://git-scm.com/" target="_blank">https://git-scm.com/</a>)</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <a href="https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98" target="_blank">Git 설치 링크</a>
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <a href="https://www.youtube.com/watch?v=cEg9hiZax8U" target="_blank">Git 무료강좌</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>개발 에디터 설치</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <a href="https://www.jetbrains.com/ko-kr/webstorm/" target="_blank">WebStorm</a> 또는 
                              <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> 추천.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-12">
            <h2>Vue CLI 3 을 이용한 개발 환경 설정</h2>
            <hr />
            <h3>vue cli 란?</h3>
            <p>
              Vue CLI 는 커맨드라인 인터페이스 기반의 Vue 프로젝트 생성 도구입니다. Vue 애플리케이션을 개발할 때 기본적인 폴더 구조, 라이브러리 등을 설정해줍니다.<br />
              <a href="https://cli.vuejs.org/guide/" target="_blank">링크 : Vue CLI 공식문서</a>
            </p>
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  첫 프로젝트 환경 설정
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>vue cli 설치 ( npm i -g @vue/cli )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              vue 명령어 제공 cli를 글로벌로 설치한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>vue init 사용을 위한 설치 ( npm i @vue/cli-init )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              2.x template을 가져오기 위한 vue init 사용하기 위하여 @vue/cli-init 을 설치한다. -g(글로벌)로 설치할지 말지는 본인이 선택하여 설치한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>첫 프로젝트 생성 ( vue create &lt;프로젝트명&gt; )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              명령창에서 vue create를 실행하면 프로젝트 생성 관련 여러가지 선택 사항이 출력된다. 상황에 맞게 선택하여 설치하면 된다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              TypeScript로 개발하려면 첫 선택물음에 'Manually select features'로 선택하여 설치 진행 한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>프로젝트 생성 후 프로젝트 메니져 실행 ( vue ui )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              프로젝트가 모두 설정 되었다고 했을때 해당 프로젝트 폴더에서 'vue ui' 명령을 실행하면 브라우져에서 현재 프로젝트 상태를 UI로 볼 수 있는 메니져가 실행된다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>Vue CLI를 통하여 plugin설치 ( vue add &lt;플러그인명&gt; )</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              vue add 명령어로 플러그인을 설치 할 수 있다. 참조 : <a href="https://cli.vuejs.org/guide/plugins-and-presets.html#plugins" target="_blank">vue plugin 관련 공식문서</a>
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              Vue 프로젝트 메니져 에서도 플러그인을 추가 할 수 있다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>Vue CLI 3 에서 웹팩 설정</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              Vue CLI 3.x 에서는 webpack설정파일이 노출되지 않습니다. 따라서 웹팩 설정을 위해서는 루트 디렉토리에 vue.config.js파일을 생성하고 관련 내용을 작성해줍니다.<br />
                              <a href="https://cli.vuejs.org/guide/webpack.html#simple-configuration" target="_blank">vue-cli 3.x vue.config.js 공식문서 참조</a>
                            </li>
                          </ul>
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