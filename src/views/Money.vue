<template>

  <Layout class-prefix="layout">
    <Tags @update:Value="onUpdateTags"/>
    <div class="FormItem-wrapper">
      <FormItem @update:value="onUpdateValue" filename="备注" placeholder="请输入具体内容"/>
    </div>
    <Tabs :data-source="recordTypeList
" :value.sync="record.types" class-prefix="moneyType"/>
    <numberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import Tabs from '@/components/Tabs.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Getter} from 'vuex-class';
import recordTypeList from '@/constants/recordTypeList';


type Tag = {
  id: string
  name: string
}
type RecordItem = {
  tags: Tag[]
  notes: string
  types: string
  amount: number
  createdAt?: Date
}


@Component({
  components: {Tags, FormItem, Tabs, NumberPad},

})
export default class Money extends Vue {
  @Getter('getRecordList') recordList: any;
  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [],
    notes: '',
    types: '-',
    amount: 0,
    createdAt: new Date(),

  };

  created(): void {
    this.$store.commit('fetchRecords');
  }

  onUpdateTags(Tags: Tag[]): void {
    this.record.tags = Tags;
  }

  onUpdateValue(Value: string): void {
    this.record.notes = Value;
  }

  saveRecord(): void {
    this.$store.commit('createRecord', this.record);
  }


}
</script>

<style>
/* eslint-disable no-alert, no-console */
.layout-content {
  display: flex;
  flex-direction: column;


}

/* eslint-enable no-alert, no-console */

</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

::v-deep .moneyType-tab-item {
  box-shadow: inset 0 0 2px fade-out(black, .1);
}

.FormItem-wrapper {
  padding: 10px 0;
}
</style>