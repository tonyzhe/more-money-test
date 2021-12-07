<template>
  <div class="tags">

    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';

type Tag = {
  id: string,
  name: string
}

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: Tag[] | undefined;
  selectedTags: Tag[] = [];

  toggle(tag: Tag): void {
    const name = this.selectedTags.map(item => item.name);
    const index = name.indexOf(tag.name);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:Value', this.selectedTags);
  }

  createTag(): void {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'success') {
        window.alert('添加成功');
      } else if (message === 'duplicated') {
        window.alert('您输入的标签重复了');
      }
    }
  }


}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 12px;
  width: 100%;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  background: #fff;

  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      display: flex;
      padding: 0 18px;
      margin-right: 24px;
      margin-top: 15px;
      background: #87CEFA;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;

      &.selected {
        background: darken(#87CEFA, 30%);
      }
    }
  }

  > .new {
    padding-top: 18px;

    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 2px solid;
      padding: 0 3px;
    }
  }
}
</style>