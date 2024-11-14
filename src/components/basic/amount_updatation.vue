<template>
  <div class="diaglog-container" v-show="props.visible" @click="close">
    <div class="diaglog-box" @click.stop>
      <p class="diaglog-title">Update your {{ props.name }}!</p>
      <div class="user-input-box">
        <div class="prompt-box">
          <label class="amount-prompt" for="input-amount">Amount:</label>
          <label class="period-prompt" for="input-period">Period:</label>
        </div>
        <div class="input-box">
          <input id="input-amount" type="number" ref="inputAmpunt" @keydown="pressKey" :value="amount.toString()">
          <input id="input-period" type="number" ref="inputPeriod" @keydown="pressKey" :value="amount.toString()">
        </div>
      </div>
      <button @click="close">Ok</button>
      <button @click="close">Cannel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAmounts } from '@/stores/amount';
import { defineProps, onBeforeUpdate, onUpdated, useTemplateRef } from 'vue';
const props = defineProps(["visible", "name"]);
const emit = defineEmits(['update:visible'])
const inputRefs = useTemplateRef("inputAmpunt");

const amountStore = useAmounts();
let amount = 0;

onBeforeUpdate(() => {
  amount = amountStore.Amount(props.name);
})

onUpdated(() => {
  inputRefs.value?.focus();
})

function close() {
  emit('update:visible', false);
}

function pressKey(event: KeyboardEvent) {
  if (event.key == "Escape") {
    console.log("is escape")
    close();
  }
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
}

.diaglog-box {
  background: white;
  width: 20%;
  height: 35%;
  padding: 20px;
  border-radius: 8px;
}

.user-input-box {
  margin: 20px 0;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
}

.prompt-box {
  display: flex;
  flex-direction: column;
}

.input-box {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
}
</style>