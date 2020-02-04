<template>
    <li>
        <div class="enhancedCheck enhancedCheck-primary"
            :class="{bold: isFolder}"
        >
            <div class="tree_container">
                <input type="checkbox" :id="'enhancedCheck' + item.value" name="" :value="item.value" @change="onInput" />
                <label :for="'enhancedCheck' + item.value">
                    {{ item.name }}
                    <span 
                        v-if="isFolder"
                        @click.prevent="toggle"
                    >
                        [{{ isOpen ? '-' : '+' }}]
                    </span>
                    <p class="btnOpenTerm"
                        v-if="!isFolder"
                        @click.prevent="openTerm"
                    > --&gt; </p>
                </label>
            </div>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
            <tree-item
                class="item"
                v-for="(child, index) in item.children"
                :key="index"
                :item="child"
                v-model="child.checked"
            />
        </ul>
    </li>
</template>

<script lang="ts">
import {Vue, Component, Prop, Model} from 'vue-property-decorator';
import {State, Getter, namespace} from 'vuex-class';

@Component({
  name: 'tree-item'
})
export default class TreeItem extends Vue {
    @Model('change', {type: Boolean}) readonly checked!: boolean;
    @Prop() item: any;

    // data
    private isOpen: boolean = false;

    // computed
    private get isFolder() {
        return this.item.children && this.item.children.length;
    }

    // method
    toggle() {
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
    }
    openTerm () {
        window.alert('약관열기');
    }

    onInput(event:Event) {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        this.$emit('change', target.checked);
    }
   
   
}
</script>

<style scoped>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}


ul {
  list-style-type: none;
}
.tree_container {
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
}
.tree_container span {
    display: inline-block;
    width: 20px;
    height: 20px;
}

input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark-color(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: -internal-light-dark-color(white, black);
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}
input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    -webkit-appearance: checkbox;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
    display: none;
}

.enhancedCheck { display: block; }
.enhancedCheck label:before {
    border-radius: 3px 0 0 3px;
}
.enhancedCheck input[type="checkbox"] + label:before {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    content: '';
    width: 30px;
    background: #dddddd;
    text-align: center;
    line-height: 200%;
}
.enhancedCheck input[type="checkbox"]:checked + label:before {
    content: "✔";
}
.enhancedCheck.enhancedCheck-primary input[type="checkbox"]:checked + label:before {
    background: #337ab7;
    color: white;
}
.enhancedCheck.enhancedCheck-primary input[type="checkbox"] + label:hover {
    background: #dddddd;
    color: #333;
}
.enhancedCheck label {
    border-radius: 3px 0 0 3px;
}
.enhancedCheck input[type="checkbox"] + label {
    border: 1px solid #aaaaaa;
    color: inherit;
    position: relative;
    padding: 5px 5px 5px 35px;
    cursor: pointer;
    display: inline-block;
}

.btnOpenTerm {
    display: inline;
    padding:0;
    margin:0;
}
</style>