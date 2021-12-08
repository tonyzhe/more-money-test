<template>

  <div class="tags">

    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tags " :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';


type Tag = {
  id: string,
  name: string
}

@Component
export default class Tags extends Vue {
  //require:true则是通知vue该属性必须传值，否则我就报错
  tags = store.tagList;
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
    if (name)
      store.createTag(name);
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