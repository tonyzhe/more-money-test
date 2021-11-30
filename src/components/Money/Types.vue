<template>
  <div>
    <ul class="types">
      <li :class="value==='-'&&'selected'" @click="selectType('-')">支出</li>
      <li :class="value==='+'&&'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';


@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;

  selectType(value: string): void {
    if (value !== '-' && value !== '+') {
      throw new Error('type is unknown');
    } else {
      this.$emit('update:value', value);
    }
  }


}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types {
  background: darken($light-blue, 8%);
  display: flex;
  font-size: 24px;

  > li {
    flex: 1;
    text-align: center;
    padding: 21px 0;
    position: relative;

    &.selected {
      box-shadow: inset 0 0 4px fade-out(black, 0.1);
    }
  }
}
</style>