<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.filename }}</span>
      <input type="text" v-model="value"
             :placeholder="this.placeholder">
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
  value = '';

  @Watch('value')
  onValueChanged(value: string): void {
    this.$emit('update:value', value);
  }


}
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  font-size: 14px;
  background: #E0FFFF;
  padding: 25px 16px;

  > .name {
    margin-right: 16px;
  }

  > input {
    background: transparent;
    border: none
  }
}
</style>