<template>
    <div>
        <ul id="demo">
            <tree-item
                class="item"
                :item="treeData"
                v-model="treeData.checked"
            />
        </ul>
        <span>{{arr}}</span>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {State, Getter, namespace} from 'vuex-class';

import TreeItem from '@/components/vueTestCode/TreeItem.vue';

@Component({
  components: {
    TreeItem,
  },
})
export default class NestedTreeTest extends Vue {
    // demo data
    private treeData = {
        name: 'My Tree',
        value: '1',
        checked: false,
        children: [
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
        ]
    };

    private arr: string[] = [];
}
</script>

<style scoped>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>