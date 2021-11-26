<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Types"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types {
  background: darken($light-blue, 8%);
  display: flex;
  font-size: 24px;

  > li {
    flex: 1;
    text-align: center;
    padding: 21px 0;
    position: relative;

    &.selected {
      box-shadow: inset 0 0 4px fade-out(black, 0.1);
    }
  }
}
</style>