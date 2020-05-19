<template>
    <div>
      <input ref="testInput1" type="text" />
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Model, Ref, Emit} from 'vue-property-decorator';
import {State, Getter, namespace} from 'vuex-class';

export interface ITestInput extends Vue {
  focus(): void;
}

@Component({
  name: 'test-input',
})
export default class TestInput extends Vue {
    @Ref('testInput1') private testInput1!: ITestInput;
    public focus() {
      this.testInput1.focus();
      this.eventTest();
    }

    @Emit()
    private eventTest() {
      return '111';
    }
}
</script>

<style scoped>

</style>