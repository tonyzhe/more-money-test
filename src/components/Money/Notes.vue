<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "Notes"
}
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  font-size: 14px;
  background: #E0FFFF;
  padding: 25px 16px;

  > .name {
    margin-right: 16px;
  }

  > input {
    background: transparent;
    border: none
  }
}
</style>