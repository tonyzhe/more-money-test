<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value"
             placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  mounted(): null {
    console.log(this.value);
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