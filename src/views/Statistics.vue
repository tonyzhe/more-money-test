<template>
  <layout>
    <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"></Tabs>
    <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"></Tabs>

    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.createdAt" class="record">
            <span>{{ tagString(item.tags) }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </layout>


</template>

<script lang="ts">

import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
import {RecordItem, Tag} from '@/custom';


@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get recordList() {
    return this.$store.state.recordList;
  }

  get result() {
    const {recordList} = this;
    const hashTable: { [key: string]: { title: string, items: RecordItem[] } } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);

    }


    return hashTable;
  }

  mounted() {
    this.$store.commit('fetchRecords');


  }

  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;
  intervalList = intervalList;

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

::v-deep li.interval-tab-item {
  background: $light-blue;
  height: 48px;


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

%item {
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
}

.title {
  @extend %item;
  //background


}

.record {
  @extend %item;
  background: #fff;
}
</style>