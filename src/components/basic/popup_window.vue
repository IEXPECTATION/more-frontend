<template>
  <div class="diaglog-container" v-show="props.visible" @click="close">
    <div class="diaglog-box" @event:close="close">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["visible", "name"]);
const emit = defineEmits(['update:visible']);

function close() {
  emit('update:visible', false);
}
</script>

<style lang="css" scoped>
.diaglog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.diaglog-box {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}

.table-container {
  width: 80%;
  height: 240px;
  overflow: auto;
  margin-top: 10px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 10px;
}

.table thead {
  position: sticky;
  top: 0;
}

.table tbody {
  height: 200px;
}

.table .table-rows td {
  text-align: center;
}
</style>