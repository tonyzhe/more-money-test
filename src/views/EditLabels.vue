<template>
  <layout>
    <div class="navBar">
      <Icon name="left" @click="goBack"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="currentTag.name" filename="标签名" placeholder="请输入标签名" @update:value="update"/>
    </div>

    <div class="button-wrapper">
      <Button @click="remove()">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';


@Component({
  components: {Button, FormItem},
  computed: {
    currentTag() {
      return this.$store.state.currentTag;
    }
  }

})
export default class EditLabels extends Vue {


  created(): void {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    console.log(this.currentTag);
    if (!this.currentTag) {
      this.$router.replace('/404');
      console.log(this.$store.state.currentTag);

    }
  }

  update(value: string): void {
    if (this.currentTag) {
      this.$store.commit('updateTag', {id: this.currentTag.id, name: value});

    }
  }

  remove(): void {

    this.$store.commit('removeTag', this.currentTag.id);
    window.alert('删除成功');
    this.$router.back();
  }

  goBack(): void {
    this.$router.back();
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