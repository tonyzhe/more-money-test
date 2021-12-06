<template>
  <Layout>
    <div class="labels-wrapper">
      <router-link class="tags" :to="`/labels/edit/${tag.id}/${tag.name}`" v-for="tag in tags" :key="tag.id">
        {{ tag.name }}
        <Icon name="right1"/>
      </router-link>

    </div>
    <div class="createLabel-wrapper">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';
import Button from '@/components/Button.vue';

tagListModel.fetch();
@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag(): void {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'success') {
        window.alert('添加成功');
      } else if (message === 'duplicated') {
        window.alert('您输入的标签重复了');
      }
    } else {
      window.alert('输入不能为空');
    }
  }
}
</script>

<style lang="scss" scoped>
.labels-wrapper {
  margin-left: 15px;

  > .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 44px;
    box-shadow: inset 0px -0.5px 0px #BCBBC1;

    > svg {
      margin-right: 23px;
    }
  }

}

.createLabel {

  min-height: 40px;
  padding: 0 12px;
  background: #767676;
  border-radius: 4px;
  border: none;
  color: white;


  &-wrapper {
    position: relative;
    text-align: center;
    margin-top: 44px;


  }

}
</style>