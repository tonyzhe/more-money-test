<template>

  <Layout class-prefix="layout">
    {{ record }}
    <Tags :data-source.sync="tags" @update:Value="onUpdateTags"/>
    <div class="FormItem-wrapper">
      <FormItem @update:value="onUpdateValue" filename="备注" placeholder="请输入具体内容"/>
    </div>

    <Types :value.sync="record.types"/>
    <numberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/model/recordListModel';
import tagListModel from '@/model/tagListModel';

type Tag = {
  id: string
  name: string
}

const recordList = recordListModel.fetch();

@Component({
  components: {Tags, FormItem, Types, NumberPad}
})
export default class Money extends Vue {
  tags = tagListModel.data;
  recordList = recordList;
  record = {
    tags: [],
    notes: '',
    types: '+',
    amount: 0,
    createdAt: new Date(),

  };


  onUpdateTags(Tags: Tag[]): void {
    this.record.tags = Tags;
  }

  onUpdateValue(Value: string): void {
    this.record.notes = Value;
  }


  onUpdateOutput(Value: string): void {
    this.record.amount = parseFloat(Value);
  }

  saveRecord(): void {
    const record2 = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();

    this.recordList.push(record2);
  }


  @Watch('recordList')
  onRecordListChanged(): void {
    recordListModel
      .save(this.recordList);
  }


}
</script>

<style>
.layout-content {
  display: flex;
  flex-direction: column;

}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.FormItem-wrapper {
  padding: 10px 0;
}
</style>