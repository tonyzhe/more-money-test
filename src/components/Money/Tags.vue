<template>
  <div class="tags">

    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) dataSource: string[];
  selectedTags: string[] = [];

  toggle(tag: string): null {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
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
  border: 1px solid red;

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