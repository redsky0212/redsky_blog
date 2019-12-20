<template>
  <div>
    <div>{{testComputed}}</div>
    <button @click="add">add count</button>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class TestComp extends Vue {
  public count:number = 0;

  // computed
  get testComputed(){
    console.log('call Test!!!');
    
    return this.count;
  }

  // method
  private add(){
    this.count++;
  }
}
</script>

<style>

</style>