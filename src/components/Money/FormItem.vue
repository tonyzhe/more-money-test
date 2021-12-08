<template>
  <div>
    <label class="form-item">
      <span class="name">{{ this.filename }}</span>
      <input type="text" :value="value"
             @change="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FoFrmItem extends Vue {
  @Prop({required: true}) filename!: string;
  @Prop() placeholder?: string;
  @Prop({default: ''}) readonly value!: string;


  onValueChanged(value: string): void {
    this.$emit('update:value', value);
  }


}
</script>

<style lang="scss" scoped>


.form-item {
  display: block;
  font-size: 14px;
  padding: 12px 16px;

  > .name {
    margin-right: 16px;
  }

  > input {
    background: transparent;
    border: none
  }
}
</style>