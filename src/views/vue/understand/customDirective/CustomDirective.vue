<template>
  <div>
    <div class="page-header">
      <h1>
        Custom Directive
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          사용자 지정 디렉티브 이해하기.
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
		<div class="row">
          <div class="col-xs-12">
            <h3>v-show, v-model 과 같은 디렉티브를 사용자가 만들어 적용하는 방법</h3>
            <p>
              custom directive의 기능 설명. (<a href="https://kr.vuejs.org/v2/guide/custom-directive.html" target="_blank">공식문서 (custom directive)</a>)
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  기본 방법(input text 태그에 화면 처음 진입 시 포커스를 바로 이동하는 기능 만들기)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>전역 Custom Directive를 v-focus로 쓰기 위해 등록하기</b>
                          <pre class="prettyprint linenums">Vue.directive('focus', {
  // 바인딩 된 엘리먼트가 DOM에 삽입되었을 때...
  inserted: function (el) {
    // 엘리먼트에 포커스를 줍니다
    el.focus()
  }
})</pre>
                        </li>
                        <li>
                          <b>로컬 화면에서 바로 적용 하려면 directives 옵션을 사용하여 적용한다.</b>
                          <pre class="prettyprint linenums">directives: {
  focus: {
    // 디렉티브 정의
    inserted: function (el) {
      el.focus()
    }
  }
}</pre>
                        </li>
                        <li>
                          <b>마지막으로 화면 템플릿에서 다음과 같이 v-focus 를 사용할 수 있다.</b>
                          <pre class="prettyprint linenums">&lt;input v-focus /&gt;</pre>
                        </li>
                        <li>
                          <b>결과</b>
                          <input v-focus /><span>// 화면에 진입하자마자 포커스가 들어온다.</span>
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
                  훅 함수(모두 선택 사항)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>bind</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              설정한 디렉티브가 element에 처음 바인딩 될때 호출됨. 여기서는 일회성 설정을 주로 한다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>inserted</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              element가 DOM에 삽입 되었을때 호출됨.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>update</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              디렉티브가 포함된 컴포넌트가 업데이트 된 후 호출됨. <span style="color:red;">하지만 자식 컴포넌트는 업데이트 되기 전일 가능성이 있다.</span>
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              내부 argument로 현재값과 이전값을 비교하여 불필요한 업데이트를 건너 뛸 수 있다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>componentUpdated</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              현재 포함된 컴포넌트와 그 자식 컴포넌트가 모두 업데이트 된 후 호출된다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>unbind</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              디렉티브가 현재 element로부터 언바인딩 될때 한번만 호출된다.
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
                  훅 함수 전달인자(v-aaa:전달인자="" 이렇게 사용)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <b>전달인자는 readonly로 사용해야한다.</b>
                      <ul>
                        <li>
                          <b>el</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              현재 디렉티브가 바인딩된 element. 이것을 이용해 DOM 조작을 할 수 있다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>binding</b> : 아래 속성을 가진 객체.
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b>name</b> : 디렉티브 이름, 'v-' 프리픽스가 없이 노출된다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b>value</b> : 디렉티브에서 전달받은 값. 예를들어 v-aaa="1+1" 일때 value는 2 이다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b>oldValue</b> : 이전 값. (<span style="color:blue;">update, componentUpdated 훅</span>에서만 사용함)
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b>expression</b> : 표현식 문자열. 예를들어 v-aaa="1+1" 일때 값은 '1+1' 이다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b>arg</b> : 디렉티브의 전달인자. 있을경우에만 값이 있음.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b>modifiers</b> : 포함된 수식어 객체. 있는경우에만 값이 있음. 예를 들어 v-aaa.foo.bar이면, 수식어 객체는 { foo: true, bar: true }입니다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>vnode</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              Vue 컴파일러가 만든 버추얼 노드. (<a href="https://vuejs.org/v2/api/#VNode-Interface" target="_blank">VNode API</a>)에 전체 설명이 있습니다.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>oldVnode</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              이전의 버추얼 노드. update와 componentUpdated에서만 사용할 수 있습니다.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3>사용 예제</h3>
            <p>
              custom directive를 사용하는 예제 입니다.
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                사용자 디렉티브의 전달인자와 값 등을 사용해보는 예제 입니다.
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에서 사용한 부분</b>
                          <pre class="prettyprint linenums">&lt;div id="hook-arguments-example" v-demo:foo.a.b="message"&gt;&lt;/div&gt;</pre>
                        </li>
                        <li>
                          <b>js 컴포넌트 소스 부분</b>
                          <pre class="prettyprint linenums">Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '&lt;br&gt;' +
      'value: '      + s(binding.value) + '&lt;br&gt;' +
      'expression: ' + s(binding.expression) + '&lt;br&gt;' +
      'argument: '   + s(binding.arg) + '&lt;br&gt;' +
      'modifiers: '  + s(binding.modifiers) + '&lt;br&gt;' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})

new Vue({
  el: '#hook-arguments-example',
  data: {
    message: 'hello!'
  }
})</pre>
                        </li>
                        <li>
                          <b>결과</b>
                          <pre>name: "demo"<br>value: "hello!"<br>expression: "message"<br>argument: "foo"<br>modifiers: {"a":true,"b":true}<br>vnode keys: tag, data, children, text, elm, ns, context, fnContext, fnOptions, fnScopeId, key, componentOptions, componentInstance, parent, raw, isStatic, isRootInsert, isComment, isCloned, isOnce, asyncFactory, asyncMeta, isAsyncPlaceholder</pre>
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
                다이나믹 전달인자 사용하기(v-aaa:<span style="color:red;">[argument]</span>="value")
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에서 pin이라는 directive에 direction이라는 전달인자를 사용.</b>
                          <pre class="prettyprint linenums">&lt;div id="baseexample"&gt;
  &lt;p&gt;Scroll down the page&lt;/p&gt;
  &lt;p v-pin:[direction]="200"&gt;Stick me 200px from the top of the page&lt;/p&gt;
&lt;/div&gt;</pre>
                        </li>
                        <li>
                          <b>js 컴포넌트 소스 부분</b>
                          <pre class="prettyprint linenums">Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    var s = (binding.arg == 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  }
})

new Vue({
  el: '#dynamicexample',
  data: function () {
    return {
      direction: 'left'
    }
  }
})</pre>
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
                디렉티브 함수 약어
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>디렉티브를 만들어줄때 함수로 간단히 설정 할 수도 있다. 이것은 bind, update만 동작하고 설정한 함수가 두군데 모두 같은 동작을 한다.</b>
                        </li>
                        <li>
                          <b>다른 훅들은 신경 쓸 필요가 없다.</b>
                          <pre class="prettyprint linenums">Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
})</pre>
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
                객체 리터럴값 바인딩
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>디렉티브 값을 객체 <span style="color:blue;">리터럴 값으로 바인딩</span> 하면 사용시 여러 값을 받아 사용할 수 있다.</b>
                          <pre class="prettyprint linenums">&lt;div v-demo="{ color: 'white', text: 'hello!' }"&gt;&lt;/div&gt;</pre>
                          <pre class="prettyprint linenums">Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})</pre>
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
                사용자 디렉티브로 validation하기
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>사용자 디렉티브를 이용하여 input값 validation하는 예제를 만들어본다.</b>
                          <pre class="prettyprint linenums">작업중</pre>
                          <pre class="prettyprint linenums">// 아직없음.</pre>
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
import { Vue, Component } from 'vue-property-decorator';

@Component({
    directives: {
        focus: {
            inserted: (el) => {
                el.focus();
            }
        }
    }
})
export default class CustomDirective extends Vue {
  // private slotProps: string = '{{ slotProps }}';
  private a: any = {};

  private mounted() {
      window.prettyPrint();
      this.$set(this.a, 'b', 1);

  }
}
</script>

<style>

</style>