<template>
  <div>
    <div class="page-header">
      <h1>
        Vue.js 테스트 코드
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          vue.js 여러가지 테스트 코드 작성 예제
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
				<div class="row">
          <div class="col-xs-12">

            <h3>Vue, TypeScript 여러가지 테스트 코드 예제</h3>
            <p>
              ...
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  컴포넌트 재귀, nested component, tree 예제
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <!-- 중첩 tree 작석 코드 시작 -->
                      <nested-tree-test />
                      <!-- 중첩 tree 작석 코드 끝 -->
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
import NestedTreeTest from '@/components/vueTestCode/nestedTreeTest.vue';

@Component({
  components: {
    NestedTreeTest,
  },
})
export default class VueTestCode extends Vue {

  private mounted() {
    window.prettyPrint();
  }
}
</script>

<style>

</style>