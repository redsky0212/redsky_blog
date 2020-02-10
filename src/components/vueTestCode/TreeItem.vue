<template>
    <li>
        <div class="enhancedCheck enhancedCheck-primary"
            :class="{bold: isFolder}"
        >
            <div class="tree_container">
                <input 
                    type="checkbox" 
                    :id="'enhancedCheck' + item.value" 
                    :name="name" 
                    :value="item.value"
                    :checked="item.checked" 
                    @click="item.checked = !item.checked"
                    @change="onInput($event, item, item.checked, allData)" 
                />
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
                :allData="allData"
                :item="child"
                :depth="depth + 1"
                :name="item.value + '_child'"
                v-model="child.checked"
            />
        </ul>
    </li>
</template>

<script lang="ts">
import {Vue, Component, Prop, Model} from 'vue-property-decorator';
import {State, Getter, namespace} from 'vuex-class';

@Component({
  name: 'tree-item',
})
export default class TreeItem extends Vue {
    @Model('change', {type: Boolean}) public readonly checked!: boolean;
    @Prop() public allData: any;
    @Prop() public item: any;
    @Prop() public depth!: number;
    @Prop() public name!: string;

    // data
    private isOpen: boolean = false;

    // computed
    private get isFolder() {
        return this.item.children && this.item.children.length;
    }


    // method
    private toggle() {
        if (this.isFolder) {
            this.isOpen = !this.isOpen;
        }
    }
    private openTerm() {
        window.alert('약관열기');
    }

    private onInput(event: Event, obj: any, ckd: boolean, allData: any) {
        if (obj.children) {
            for (const child of obj.children) {
                if ( child.children ) {
                    for ( const child2 of child.children ) {
                        child2.checked = ckd;
                    }
                }
                child.checked = ckd;
            }
        }

        const target = (event.target as HTMLInputElement);
        window.console.log(target.getAttribute('name'));
        const name = target.getAttribute('name');
        const len = document.querySelectorAll('input[name="' + name + '"]').length;
        const checkLen = document.querySelectorAll('input[name="' + name + '"]:checked').length;
        if (name) {
            const parentVal = name.split('_child')[0];
            if ( len === checkLen ) {
                // (document.querySelector('input[value="'+(parentVal)+'"]') as HTMLInputElement).checked = true;
               // this.$emit('change', true);
               window.console.log('all');
               this.findVal(allData, parentVal, true);
            } else {
                // (document.querySelector('input[value="'+(parentVal)+'"]') as HTMLInputElement).checked = false;
                // this.$emit('change', false);
                 window.console.log('not all');
                 this.findVal(allData, parentVal, false);
            }
        }


        // const target: HTMLInputElement = event.target as HTMLInputElement;
        // this.$emit('change', target.checked);

        // window.console.log(target.getAttribute('name'));
        // const name = target.getAttribute('name');
        // const len = document.querySelectorAll('input[name="'+name+'"]').length;
        // const checkLen = document.querySelectorAll('input[name="'+name+'"]:checked').length;
        // if (name) {
        //     const parentVal = name.split('_child')[0];
        //     if ( len === checkLen ) {
        //         //(document.querySelector('input[value="'+(parentVal)+'"]') as HTMLInputElement).checked = true;
        //         ckd = true;
        //     } else {
        //         //(document.querySelector('input[value="'+(parentVal)+'"]') as HTMLInputElement).checked = false;
        //         ckd = false;
        //     }
        // }
    }
    private findVal(allData: any, val: string, chk: boolean) {
        const d = allData;

        d.forEach((element: any) => {
            if ( element.value === val ) {
                element.checked = chk;
                return false;
            } else {
                if (element.children && element.children.length) {
                    this.findVal(element.children, val, chk);
                }
            }
        });
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