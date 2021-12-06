<template>
  <button class="button" @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  min-height: 40px;
  padding: 0 12px;
  background: #767676;
  border-radius: 4px;
  border: none;
  color: white;
}
</style>