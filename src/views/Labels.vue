<template>
  <Layout class-prefix="label">
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

import {Component, Mixins} from 'vue-property-decorator';

import Button from '@/components/Button.vue';
import tagHelper from '@/mixins/tagHelper';


@Component({
  components: {
    Button

  },
  computed: {
    tags() {
      return this.$store.state.tagList;
    }
  }
})
export default class Labels extends Mixins(tagHelper) {
  beforeCreate(): void {
    this.$store.commit('fetchTags');
  }


}
</script>

<style>
/* eslint-disable no-alert, no-console */
.label-content {
  display: flex;
  flex-direction: column;
}

/* eslint-disable no-alert, no-console */
</style>
<style lang="scss" scoped>
.labels-wrapper {
  margin-left: 15px;
  flex-grow: 1;
  overflow: auto;

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
    padding: 30px 0;


  }

}
</style>