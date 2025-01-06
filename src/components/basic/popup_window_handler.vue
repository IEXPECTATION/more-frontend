<template>
  <div class="diaglog-container" v-show="props.visible" @click="close">
    <div class="diaglog-box">
      <template v-if="props.name == 'Cash'">
        <Cash @event:close="close" />
      </template>

      <template v-else-if="props.name == 'Dream Fund'">
        <DreanFund @event:close="close" />
      </template>

      <template v-else-if="props.name == 'Goose'">
        <p class="title">Goose</p>
      </template>

      <template v-else-if="props.name == 'Goldren Egg'">
        <p class="title">Goldren Egg</p>
      </template>

      <template v-else-if="props.name == 'Silver Egg'">
        <p class="title">Silver Egg</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cash from "./cash_handler.vue";
import DreanFund from './dream_fund_handler.vue';

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