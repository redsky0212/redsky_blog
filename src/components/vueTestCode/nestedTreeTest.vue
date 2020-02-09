<template>
    <div>
        <ul id="demo">
            <tree-comp
                class="item"
                :item="newData"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {State, Getter, namespace} from 'vuex-class';

import TreeComp from '@/components/vueTestCode/TreeComp.vue';

@Component({
  components: {
    TreeComp,
  },
})
export default class NestedTreeTest extends Vue {
    // demo data
    // 여기서 root부분에 객체로 감싸서 전체선택과 같은 루트노드를 하나 만든다. 여기서는 'all'
    private treeData = [
        { name: 'hello', value:'1-1', checked: false, },
        { name: 'wat', value: '1-2', checked: false, },
        {
            name: 'child folder', value: '1-3', checked: false,
            children: [
                {
                    name: 'child folder', value: '1-3-1', checked: false,
                    children: [
                        { name: 'hello', value: '1-3-1-1', checked: false, },
                        { name: 'wat', value: '1-3-1-2', checked: false, }
                    ]
                },
                { name: 'hello', value: '1-3-2', checked: false, },
                { name: 'wat', value: '1-3-3', checked: false, },
                {
                    name: 'child folder', value: '1-3-4', checked: false,
                    children: [
                        { name: 'hello', value: '1-3-4-1', checked: false, },
                        { name: 'wat', value: '1-3-4-2', checked: false, }
                    ]
                }
            ]
        }
    ];

    private org: any = {
        '1': {
            'title': '첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
        },
        '1.1': {
            'title': 'depth2 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
        },
        '1.1.1': {
            'title': 'depth3 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c.html',
        },
        '1-2': {
            'title': '1, 2 테스트 이것저것 약관 신청 필수',
        },
        '3-5': {
            'title': '이것저것 약관 신청 필수',
        },
        '3': {
            'title': 'depth2 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
        },
        '3.1': {
            'title': 'depth3 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
        },
        '3.1.1': {
            'title': 'depth4 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '3.1.2': {
            'title': 'depth4의 두번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '3.1.3': {
            'title': 'depth4의 세번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '3.2': {
            'title': 'depth3의 두번째 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '3.2.1': {
            'title': 'depth4의 첫번째의 첫번째것 타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '3.2.2': {
            'title': 'depth4의 두번째의 두번째껏 타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '5': {
            'title': 'depth2 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '5.1': {
            'title': 'depth3의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '5.2': {
            'title': 'depth3의 두번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '5.2.1': {
            'title': 'depth4의 두번째의 첫번째 타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '2': {
            'title': 'depth1의 새로운 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '2.1': {
            'title': 'depth2의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '2.2': {
            'title': 'depth2의 두번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '2.2.1': {
            'title': 'depth3의 두번째의 첫번째꺼 타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '2.3': {
            'title': 'depth2의 세번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '4': {
            'title': 'depth1의 새로운 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        '4.1': {
            'title': 'depth2의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'study': {
            'title': 'depth1의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'study.1': {
            'title': 'depth2의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'study.1.1': {
            'title': 'depth3의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'study.1.2': {
            'title': 'depth3의 두번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'study.2': {
            'title': 'depth2의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'abc1': {
            'title': 'depth1의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'abc1.1': {
            'title': 'depth2의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
        'abc1.2': {
            'title': 'depth2의 첫번째타이틀 첫번째 내용',
            'caption': 'sub 내용 어쩌고 저쩌고...',
            'url': '../a/b/c/d.html',
        },
    };

    private newData: any[] = [];
    private created() {
        
        let tempArr: any[] = [];

        for (const item in this.org) {

            const itemObj = this.org[item];

            // depth1 구하기
            if (!/\./g.test(item)) {
                this.setArrItem(tempArr, itemObj, item);    
            }
            // depth2 구하기
            const depthTemp = item.split('.');
            if (depthTemp.length === 2) {
                this.createArr(tempArr, depthTemp, itemObj, item);
            } else if (depthTemp.length === 3) {
                tempArr.filter((depth1Item) => {
                    if (depth1Item.value === depthTemp[0]) {
                        depth1Item.children.filter((depth2Item: any) => {
                            if (depth2Item.value === depthTemp[0] + '.' + depthTemp[1]){
                                this.setArrItem(depth2Item.children, itemObj, item);
                            }
                        });
                    }
                });
                
            }
        }


        // 만들어진 트리형태의 데이터에서 '-'가 있는 경우를 체크하고 해당 노드를 빼고 자식으로 전환하는 로직
        let depth2Item: any[] = [];
        tempArr.forEach((item, index) => {
            if ( /\-/g.test(item.value) ) {
                depth2Item = depth2Item.concat(item.value.split('-'));
            }
        });
      
        let lastArr: any[] = [];
        let depth2Obj: any = {};
        tempArr.forEach((item, index) => {
            const key = depth2Item.find(elem => (elem === item.value));
            if (key) {
                Vue.set(depth2Obj, key, item);
            } else {
                lastArr = lastArr.concat(item);
            }
        });
        lastArr.forEach((item, index) => {
            if ( /\-/g.test(item.value) ) {
                const arr = item.value.split('-');
                for (const el of arr) {
                    if (depth2Obj[el]) {
                        Vue.set(item.children, item.children.length, depth2Obj[el]);
                    }
                }
            }
        });

        // const idx = tempArr.findIndex((item) => {
        //     return /\-/g.test(item.value);
        // });
        window.console.log(depth2Obj);
        window.console.log(lastArr);

        this.newData = lastArr;


        
    }

    private createArr(arr: any, depthTemp: string[], itemObj: any, item: string) {
        arr.filter((depth1Item: any) => {
            if (depth1Item.value === depthTemp[0]){
                this.setArrItem(depth1Item.children, itemObj, item);
            }
        });
    }

    private setArrItem(arr: any, obj: any, value: string) {
        Vue.set(arr, arr.length, {
            name: obj.title + value,
            caption: obj.caption,
            value: value,
            checked: false,
            children: [],
        });
    }

    
}
</script>

<style scoped>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>