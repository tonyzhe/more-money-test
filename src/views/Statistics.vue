<template>
  <layout>
    <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"></Tabs>


    <ol class="list-content">
      <li v-for="(group,index) in groupList" :key="index" class="titles">

        <h3 class="title">{{ beautify(group.title) }}<span>¥{{ group.total }}</span></h3>

        <ol>
          <li v-for="item in group.items" :key="item.createdAt" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>¥{{ item.amount }}</span>
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
import dayjs from 'dayjs';
import clone from '@/lib/clone';


@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    const tagName = tags.map(item => item.name);
    return tags.length === 0 ? '无' : tagName.join('&');
  }

  beautify(string: string) {
    const day = dayjs(string);//使用字符串打印当天的信息
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }


  get recordList(): RecordItem[] {
    return this.$store.state.recordList;
  }

  get groupList() {
    const {recordList} = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter(r => r.types === this.type)
      .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];

    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(current.createdAt, 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }

  mounted() {
    this.$store.commit('fetchRecords');


  }

  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;


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


%item {
  display: flex;
  padding: 0 18px;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
}

.total {
  float: right;
}

.title {
  @extend %item;
  //background
  display: flex;

}

.record {
  @extend %item;
  background: #fff;
}

.notes {
  margin-right: auto;
  margin-left: 20px;
}


</style>