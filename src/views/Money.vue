<template>

  <Layout class-prefix="layout">
    <Tags :data-source.sync="tags" @update:Value="onUpdateTags"/>
    <Notes @update:value="onUpdateValue"/>
    <Types :value.sync="record.types"/>
    <numberPad :value.sync="record.amount"/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[]
  notes: string
  types: string
  amount: number
}
@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票', '约会'];
  record: Record = {
    tags: [],
    notes: '',
    types: '+',
    amount: 0
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