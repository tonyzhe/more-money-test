<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Types",
  data() {
    return {
      type: '-' //'-'表示支出，'+'表示收入
    }
  },
  methods: {
    selectType(type) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown')
      } else {
        this.type = type
      }
    }
  }
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