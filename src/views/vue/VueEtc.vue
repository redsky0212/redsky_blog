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

            <h3>Vue 작업중 정리할것들(우선정리, 나중에 따로 정리할 필요 있음.)</h3>
            <p>
              Vue, Typescript 를 이용하여 작업중에 멍청하게 몰랐던 부분들, 오랫동안 고민한것들을 기억하기 위한 용도로 정리 한다.
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
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              단 name을 꼭 지정해 줘야 나중에  npm run build 하고나서 제대로 하위까지 재귀가 잘 호출됨. ex) @Component({name:'sub-menu'})
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">&lt;template&gt;
  &lt;!-- 자기 자신을 호출 --&gt;    
  &lt;sub-menu v-if="item.sub" :sub-data="item.sub" /&gt;
&lt;/template&gt;

&lt;script lang="ts"&gt;
import {Vue, Component, Prop} from 'vue-property-decorator';
import { GnbInfo } from '../../store/modules/gnb';

@Component({name:'sub-menu'})
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

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  2019.12.27
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>vue 네비게이션가드(전역가드, 라우터가드, 컴포넌트 내부 가드)</b>
                          <a href="https://router.vuejs.org/kr/guide/advanced/navigation-guards.html" target="_blank">네비게이션가드 공식문서 링크</a>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              (전역가드)router.beforeEach 를 사용하여 보호하기 이전에 전역 등록을 할 수 있습니다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})</pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              (라우터가드) beforeEnter 가드를 라우트의 설정 객체에 직접 정의 할 수 있습니다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})</pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              (컴포넌트내부가드) beforeRouteEnter 와 beforeRouteLeave, beforeRouteUpdate 를 사용하여 라우트에 설정된 컴포넌트 안에 네비게이션가드를 직접 정의 할 수 있습니다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              beforeRouteEnter에서는 컴포넌트 인스턴스가 아직 생성되지 않았기때문에 this에 접근하지 못합니다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
    // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
    // `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!
  },
  beforeRouteLeave (to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.
    // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
  }
}</pre>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              (컴포넌트내부가드) 그러나 콜백을 next에 전달하여 인스턴스에 액세스 할 수 있습니다. 네비게이션이 확인되고 컴포넌트 인스턴스가 콜백에 전달인자로 전달 될 때 콜백이 호출됩니다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">beforeRouteEnter (to, from, next) {
  next(vm => {
    // `vm`을 통한 컴포넌트 인스턴스 접근
  })
}</pre>
                        </li>
                        <li>
                          <b>TypeScript에서 컴포넌트 내부 가드 사용</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              class방식 내부에서 바로 beforeRouteEnter가 호출되지 않으므로 아래 방법으로 적용한다.
                              <pre class="prettyprint linenums">import {Vue, Component} from 'vue-property-decorator';
import VueRouter, {Route} from 'vue-router';

// root ts파일이나 컴포넌트 상단에 코딩
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

@Component
export default class TestCompComment extends Vue {
  // class내부에서 사용
  beforeRouteEnter(to:Route, from:Route, next:any){
    const id = to.query.id as string;
    console.log(id);
    next({id:id});
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

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class VueEtc extends Vue {

  private mounted() {
    window.prettyPrint();
  }
}
</script>

<style>

</style>