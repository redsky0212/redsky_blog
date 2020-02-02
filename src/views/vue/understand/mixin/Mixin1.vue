<template>
  <div>
    <div class="page-header">
      <h1>
        Mixin
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          Mixin 이해하기.
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
		<div class="row">
          <div class="col-xs-12">
            <h3>모든 vue 컴포넌트에서 사용하는 공통된 구성요소, 옵션 등을 따로 빼서 관리하는 기능.</h3>
            <p>
              mixin의 기능 설명. (<a href="https://kr.vuejs.org/v2/guide/mixins.html" target="_blank">공식문서 (mixin)</a>)
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  기본 방법(따로 빼고자 하는 기능을 mixin객체로 만들어서 컴포넌트에 혼합하는 기본적인 방법)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>myMixin 이라는 객체 생성</b>
                          <pre class="prettyprint linenums">var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}</pre>
                        </li>
                        <li>
                          <b>컴포넌트에서 mixin 해서 혼합해주는 예제</b>
                          <pre class="prettyprint linenums">// mixin을 사용할 컴포넌트 정의
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"</pre>
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
                  mixin하는 컴포넌트에 같은 요소가 있을경우 Vue가 적절하게 병합해준다.
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>data에 'message','foo','bar'가 있고 'message'가 같은 이름으로 있을경우 컴포넌트의 구성요소 값이 우선 적용된다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              'foo','bar'는 따로 가지고 있었지만 병합되어 모두 컴포넌트에 가지고 있게 된다.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              'message'는 컴포넌트와 mixin객체에 모두 같은 이름으로 들어 있으므로 충돌시 컴포넌트의 구성요소 값이 우선 적용된다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => 결과값 : { message: "goodbye", foo: "abc", bar: "def" }
  }
})</pre>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>같은 이름의 훅 함수가 여러군데 많을경우 모든 훅 함수가 호출된다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              (같은 이름의 훅 함수 충돌시)따로 mixin객체에 선언해준 훅 함수가 충돌시 병합된 후 먼저 호출 되고 컴포넌트에 설정한 훅 함수가 나중에 호출된다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">var mixin = {
  created: function () {
    console.log('mixin hook called')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('component hook called')
  }
})

// 결과 : 두개 다 호출된다.
// => "mixin hook called"
// => "component hook called"</pre>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>같은 이름의 method가 있을경우 컴포넌트에 있는 method가 우선적용되어 병합된다.</b>
                          <pre class="prettyprint linenums">var mixin = {
  methods: {
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    conflicting: function () {
      console.log('from self')
    }
  }
})

vm.conflicting() // => 결과 : "from self"</pre>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3>전역 Mixin</h3>
            <p>
              mixin을 전역으로 만들어 모든 컴포넌트에 적용.<br />
              <span style="color:#f00">(주의) 주로 아래 예제와 같이 사용자 지정 옵션 처리 시에만 사용하는게 좋습니다.</span>
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  Mixin전역생성, <span style="color:#f00">이 후 생성된 모든 Vue컴포넌트에 영향</span>을 미칩니다.
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>myOption 이라는 커스텀 옵션 핸들러를 만들고 싶을때 사용할 수 있습니다.</b>
                          <pre class="prettyprint linenums">// `myOption` 사용자 정의 옵션을 위한 핸들러 주입
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})</pre>
                        </li>
                        <li>
                          <b>만들어진 myOption 핸들러를 사용</b>
                          <pre class="prettyprint linenums">new Vue({
  myOption: 'hello!'
})
// => "hello!"</pre>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3>vue-property-decorator에서 Mixin 사용</h3>
            <p>
              vue-property-decorator는 vue-class-component를 상속받으며, mixin은 vue-class-componet에 정의 되어있다.
            </p>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  vue-property-decorator에서 mixin사용
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>mixin으로 사용할 mixin.js 파일 생성</b>
                          <pre class="prettyprint linenums">import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare a mixin as the same style as components.
@Component
export default class MyMixin extends Vue {
  mixinValue = 'Hello'
}</pre>
                        </li>
                        <li>
                          <b>mixin을 사용할 컴포넌트</b>
                          <pre class="prettyprint linenums">import Component, { mixins } from 'vue-class-component'
import MyMixin from './mixin.js'

// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
@Component
export class MyComp extends mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
  }
}</pre>
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

@Component
export default class Mixin1 extends Vue {
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