<template>
  <div>
    <div class="page-header">
      <h1>
        Vue.js 잡다구리
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          vue.js 잡다구리 정리
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
				<div class="row">
          <div class="col-xs-12">

            <h3>Vue 작업중 정리할것들</h3>
            <p>
              Vue, Typescript 를 이용하여 작업중에 멍청하게 몰랐던 부분들, 오랫동안 고민한것들을 기억하기 위한 용도로 정리 한다.</a>
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  2019.12.20
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>SFC(싱글파일컴포넌트)를 만들고 재귀 호출 하고자 할때 바로 호출하면 됨.</b>
                          <pre class="prettyprint linenums">&lt;template&gt;
  &lt;!-- 자기 자신을 호출 --&gt;    
  &lt;sub-menu v-if="item.sub" :sub-data="item.sub" /&gt;
&lt;/template&gt;

&lt;script lang="ts"&gt;
import {Vue, Component, Prop} from 'vue-property-decorator';
import { GnbInfo } from '../../store/modules/gnb';

@Component
export default class SubMenu extends Vue {
  @Prop() private subData!: GnbInfo[];
}
&lt;/script&gt;</pre>
                        </li>
                        <li>
                          <b>computed 속성의 동작 원리 관련</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              computed에서 사용하고 있는 데이터가 업데이트 되는 시점에 해당 computed가 호출 된다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <a href="https://mygumi.tistory.com/311" target="_blank">computed관련 참조할만한 링크 : https://mygumi.tistory.com/311</a>
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              typescript에서 computed선언은 class내부의 아래와 같은 형식으로 선언 할 수 있다.<br />
                              class내부에 computed를 선언하지 않고 상단 @Component({ computed:{} }) 에 선언하면 this를 찾을 수가 없어서 구현하기 힘들어 진다.
                              <pre class="prettyprint linenums">import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class App extends Vue {
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }
}</pre>
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

<script>
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class VueEtc extends Vue {

  mounted() {
    window.prettyPrint && prettyPrint();
  }
}
</script>

<style>

</style>