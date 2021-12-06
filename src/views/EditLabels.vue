<template>
  <layout>
    <div class="navBar">
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" filename="标签名" placeholder="请输入标签名" @update:value="updateTagName"/>
    </div>

    <div class="button-wrapper">
      <Button @click="removeTag(tag.id)">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabels extends Vue {
  tag?: { id: string, name: string } = undefined;


  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');
    }
  }

  updateTagName(value: string): void {
    if (this.tag) {
      tagListModel.update(this.tag.id, value);

    }
  }

  removeTag(id: string): void {
    tagListModel.remove(id);
  }


}
</script>

<style lang="scss" scoped>

layout {
  position: relative;
}

.navBar {
  position: relative;
  min-height: 48px;
  text-align: center;
  background: #fff;
  line-height: 48px;

  > span {
    font-size: 16px;

  }

  > svg {
    position: absolute;
    left: 23px;
    top: 50%;
    transform: translateY(-50%);

  }
}

.form-wrapper {
  background: #fff;
  margin-top: 8px;
}

.button-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80px;
  //border: 1px solid red;
}
</style>