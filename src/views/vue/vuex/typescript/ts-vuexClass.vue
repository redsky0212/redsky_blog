<template>
  <div>
    <div class="page-header">
      <h1>
        vuex-class 사용법
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          npm library (vuex-class) 이해하기
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
				<div class="row">
          <div class="col-xs-12">
            <h3>@State</h3>
            <p>
              <ul>
                <li>
                  <b>vuex-class 참조사이트. (<a href="https://withhamit.tistory.com/99" target="_blank">https://withhamit.tistory.com/99</a>)</b>
                </li>
              </ul>
            </p>
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  @State
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>@State의 가장 기본 코드 방식</b>
                          <pre class="prettyprint linenums">@State
constants!: object;</pre>
                        </li>
                        <li>
                          <b>product 모듈의 product state를 가져온다는 의미이다.</b>
                          <pre class="prettyprint linenums">@State(state => state.product.product)
product!: ProductInfo;</pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              이런코드로도 사용할 수 있다.
                              <pre class="prettyprint linenums">@State('product',{namespace: 'product'})
product!: ProductInfo;</pre>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>더 이해가 되는 예제를 작성하자...</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  @Component
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>-</b>
                        </li>
                        <li>
                          <b>-</b>
                        </li>
                        <li>
                          <b>-.</b> 
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              -
                            </li>
                          </ul>
                        </li>
                        
                        <li>
                          <b>더 이해가 되는 예제를 작성하자...</b>
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

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class TsVuexClass extends Vue {

  private mounted() {
    window.prettyPrint();
  }
}
</script>

<style>

</style>