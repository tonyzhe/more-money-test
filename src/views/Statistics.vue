<template>
  <layout>
    <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"></Tabs>
    <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"></Tabs>
  </layout>


</template>

<script lang="ts">
import Types from '@/components/Money/Types.vue';
import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Types, Tabs}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  typeList = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
  ];
  intervalList = [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'mouth'}

  ];

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

::v-deep .type-tab-item {

  background: #fff;

  &.selected {
    background: $light-blue;
    box-shadow: none;
  }
}

::v-deep .interval-tab-item {
  background: $light-blue;

  &.selected {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 4px;
      bottom: 0;
      background: #333333;
    }
  }

}
</style>