<template>
  <div class="diaglog-container" v-show="props.visible" @click="close">
    <div class="diaglog-box" @click.stop>
      <div class="user-input-box">
        <template v-if="props.name == 'Cash'">
          <CashHandler @event:cash="close()" />
        </template>

        <template v-else-if="props.name == 'Dream Fund'">
          <p class="title">Dream Fund</p>
          <div class="table-container">
            <table class="table">
              <thead>
                <tr class="table-header">
                  <th>Id</th>
                  <th>Name</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
                <tr class="table-rows">
                  <td>1</td>
                  <td>test item</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
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
      <!-- <div class="buttons" v-if="props.name.includes('Egg')">
        <button @click="">Hatch</button>
        <button @click="">Scrap</button>
      </div>
      <div class="buttons" v-else>
        <button @click="close">Ok</button>
        <button @click="close">Cannel</button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onBeforeUpdate } from 'vue';
import CashHandler from "./cash_handler.vue";

const props = defineProps(["visible", "name"]);
const emit = defineEmits(['update:visible'])

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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}

.diaglog-box {
  background: white;
  width: 20%;
  height: 40%;
  padding: 20px;
  border-radius: 8px;
}

.user-input-box {
  height: 100%;
  width: 100%;
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