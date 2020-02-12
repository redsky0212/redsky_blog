<template>
  <div>
    <div class="page-header">
      <h1>
        TypeScript Decorator
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          Decorator 이해하기.
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
				<div class="row">
          <div class="col-xs-12">
            <h3>Decorator</h3>
            <p>
              <ul>
                <li>
                  <b>데코레이터는 런타임에 한번 실행된다. 최초 실행시 함번만 실행됨.</b>
                </li>
              </ul>
            </p>
            <h3>Decorator 종류</h3>
            <p>
              <ul>
                <li>
                  <b>Class Decorator</b>
                </li>
                <li>
                  <b>Method Decorator</b>
                </li>
                <li>
                  <b>Property Decorator</b>
                </li>
                <li>
                  <b>Parameter Decorator</b>
                </li>
              </ul>
            </p>
            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  Class Decorator
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>class 데코레이터의 기본 구조는 아래와 같다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              hello는 함수이고 인자의 constructorFn은 Person의 constructor함수이다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">function hello(constructorFn: Function) {
  console.log(constructorFn);
}

@hello
class Person {

}</pre>
                        </li>
                        <li>
                          <b>좀 더 나아가 Factory로 사용한 방법</b>
                          <pre class="prettyprint linenums">function hello(constructorFn: Function) {
  console.log(constructorFn);
}
function helloFactory(show: boolean) {
  // 인자를 받고 hello를 실행하거나 실행하지 않거나
  if (show) {
    return hello; // hello Decorator 함수를 쓴다.
  } else {
    return null; // 아무 데코레이터 함수를 사용하지 않는다.
  }
}

@helloFactory(true) // 보여줄래
@helloFactory(false) // 안보여줄래
class Person {
}</pre>
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
                  Method Decorator
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>한마디로 말해서 아래 메서드에 기능을 추가한다 는 의미.</b>
                        </li>
                        <li>
                          <b>메서드 함수 바로위에 '@데코레이터' 와 같은 형식으로 사용된다.</b>
                        </li>
                        <li>
                          <b>메서드 데코레이터 함수에서 받게되는 파라미터는 아래와 같다.</b> 
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              target : 작업하고자하는 객체 ( 현재method의 모체가 되는 객체(Class)라 할 수 있다.)
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              name : 데코레이터 아래 메서드함수 이름.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              descriptor : 새롭게 정의하고자하는 속성에 대한 설명 이는 Object.defineProperty()의 속성들.
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
                  Property Decorator
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>Property 데코레이터 함수에서 받는 파라미터는 아래와 같다.</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              target : 작업하고자하는 객체 ( 현재method의 모체가 되는 객체(Class)라 할 수 있다.)
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              propertyKey : 데코레이터 아래 property의 이름.
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
export default class StudyLink extends Vue {

  private mounted() {
    window.prettyPrint();
  }
}
</script>

<style>

</style>