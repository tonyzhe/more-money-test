<template>
  <layout>
    <div class="navBar">
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem filename="标签名" placeholder="nnnn" class="form-item-in-edit"/>
    </div>

    <div class="button-wrapper">
      <Button @click="removeTag">删除标签</Button>
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
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
  }

  removeTag(): void {
    console.log('即将删除tag');
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