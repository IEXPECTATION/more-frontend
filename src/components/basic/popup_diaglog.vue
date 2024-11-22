<template>
  <div class="diaglog-container" v-show="props.visible" @click="close">
    <div class="diaglog-box" @click.stop>
      <p class="diaglog-title">Update your {{ props.name }}!</p>
      <div class="user-input-box">
        <!-- <div class="prompt-box">
          <template v-if="(props.name as string).includes('Egg')">
            <label class="amount-prompt" for="input-amount">Amount:</label>
            <label class="period-prompt" for="input-period">Period:</label>
          </template>
          <template v-else>
            <label class="amount-prompt" for="input-amount">Amount:</label>
            <label class="period-prompt" for="input-period">Rate:</label>
          </template>
        </div> -->
        <div class="input-box">
          <template v-if="props.name.includes('Egg')">
            <input id="input-amount" type="number" ref="inputAmpunt" @keydown="pressKey" placeholder="Input your new Amount">
            <input id="input-period" type="number" ref="inputPeriod" @keydown="pressKey" placeholder="Input your new Preiod">
          </template>
          <template v-else>
            <input id="input-amount" type="number" ref="inputAmpunt" @keydown="pressKey" placeholder="Input your new Amount">
            <input id="input-period" type="number" ref="inputPeriod" @keydown="pressKey" placeholder="Input your new Rate">
          </template>
        </div>
      </div>
      <button @click="update">Ok</button>
      <button @click="close">Cannel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAmounts } from '@/stores/amounts';
import { defineProps, onBeforeUpdate, onUpdated, useTemplateRef } from 'vue';
const props = defineProps(["visible", "name"]);
const emit = defineEmits(['update:visible'])
const inputRefs = useTemplateRef("inputAmpunt");

const amountStore = useAmounts();
let amount = 0;

onBeforeUpdate(() => {
  amount = amountStore.Get(props.name);
})

onUpdated(() => {
  inputRefs.value?.focus();
})

function close() {
  emit('update:visible', false);
  if(inputRefs.value) {
    inputRefs.value.value = "";
  }
}

function update() {
  let currentAmount = parseInt(inputRefs.value?.value ?? '0', 10);
  if (currentAmount != amount) {
    amountStore.Set(props.name, currentAmount);
  }
  close();
}

function pressKey(event: KeyboardEvent) {
  if(event.key == "Enter") {
    update();
  } else if (event.key == "Escape") {
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
  margin: 20px 0;
  display: flex;
  height: 120px;
  justify-content: center;
  align-items: center;
}

/* .prompt-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
} */

.input-box {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.input-box input {
  width: 240px;
}
</style>