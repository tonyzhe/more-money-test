<template>
  <ul class="tabs">
    <li v-for="item in dataSource"
        :key="item.value" @click="selectValue(item)"
        :class="liClass(item)"
    >{{ item.text }}

    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }
@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({type: String, default: '64px'})
  height!: string;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  liClass(item: DataSourceItem) {
    return {[this.classPrefix + '-tab-item']: this.classPrefix, selected: item.value === this.value};
  }

  selectValue(item: DataSourceItem): void {
    this.$emit('update:value', item.value);
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tabs {
  background: #fff;
  display: flex;
  font-size: 24px;

  > li {
    flex: 1;
    text-align: center;
    padding: 21px 0;
    position: relative;

    &.selected {
      background: $light-blue;
    }
  }
}
</style>