<template>
    <div>
        <ul id="demo">
            <tree-comp
                class="item"
                :item="treeData"
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

    
}
</script>

<style scoped>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>