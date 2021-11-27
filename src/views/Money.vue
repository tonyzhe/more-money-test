<template>
  <Layout class-prefix="layout">
    <Tags/>
    <Notes/>
    <Types/>
    <numberPad/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';

export default {
  name: 'Money',

  components: {Tags, Notes, Types, NumberPad}
};
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