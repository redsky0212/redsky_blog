# job story
## vue cli 첫 환경설정
* node 설치
* vue 명령어 제공 cli를 글로벌로 설치. ( npm i -g @vue/cli )
* 2.x template을 가져오기 위한 vue init 사용하기 위하여 @vue/cli-init설치 ( npm i -g @vue/cli-init ) -g로 설치할지는 본인선택.
* 첫 프로젝트 생성하기 ( vue create &lt;프로젝트명&gt; )
* 위와같이 실행하면 다양한 선택 설치에 대하여 묻는다. Manually select features로 선택하여 선택적으로 설치한다.
* ( vue ui ) 실행하여 브라우져에서 상태를 ui로 볼 수 있다.
* Vue CLI를 통하여 plugin을 설치하기 위해 vue add 명령어를 사용할 수 있다.
  - 또는 Vue 프로젝트 메니져 에서도 추가 할 수있다.
  - Vue CLI 3 Plugin에 대해서는 [여기 참조](https://cli.vuejs.org/guide/plugins-and-presets.html#plugins)
## 작업순서
### Header
### SideBar.vue
* 메뉴 데이터에서 가져와 보여주기.
  - [X] 데이터는 store에 만들어서 가져오기.
  - [X] store개발방법 정리.
* 메뉴 클릭시 화면전환 라우터 작업하기.
  - [X] 메뉴클릭시 화면전환
  - [ ] 화면이동 후 메뉴선택 모양 UI 유지
