<template>

  <Layout class-prefix="layout">
    {{ recordList }}
    <Tags :data-source.sync="tags" @update:Value="onUpdateTags"/>
    <Notes @update:value="onUpdateValue"/>
    <Types :value.sync="record.types"/>
    <numberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import {model} from '@/model';

const recordList = model.fetch();

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票', '约会'];
  recordList = recordList;
  record = {
    tags: [],
    notes: '',
    types: '+',
    amount: 0,

  };

  onUpdateTags(Tags: string[]): void {
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
    model.save(this.recordList);
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


</style>