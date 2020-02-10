<template>
    <div>
        <div class="tree_container">
            <input type="checkbox" id="enhancedCheckContainer" :name="compData.value" :value="compData.value" @change="onChange" />
            <label for="enhancedCheckContainer">
                {{ compData.name }}
                <span v-if="isFolder" @click.prevent="toggle">
                    [{{ isOpen ? '-' : '+' }}]
                </span>
                <p class="btnOpenTerm" v-if="!isFolder" @click.prevent="openTerm"> --&gt; </p>
            </label>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
            <tree-item 
                class="item"
                v-for="(child, index) in item" :key="index"
                :allData="item"
                :item="child"
                depth="1"
                :name="compData.value + '_child'"
                v-model="child.checked"
            />
        </ul>
        <span>{{arr}}</span>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {State, Getter, namespace} from 'vuex-class';

import TreeItem from '@/components/vueTestCode/TreeItem.vue';

@Component({
  components: {
    TreeItem,
  },
})
export default class TreeComp extends Vue {
    @Prop() public item: any;

    private arr: string[] = [];
    private isOpen: boolean = false;
    private compData = {
        name: 'All',
        value: '1',
        checked: false,
        children: this.item,
    };


    // computed
    private get isFolder() {
        return this.item && this.item.length;
    }

    private openTerm() {
        window.alert('약관열기');
    }

    private toggle() {
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
    }
    private onChange(event: Event) {
        // const a = '';
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