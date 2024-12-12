<template>
  <div class="cash-container">
  <p class="title">Update your Cash!</p>
  <div class="input-box">
    <input id="input-amount" type="number" ref="inputAmpunt" @keydown="pressKey" placeholder="Input your new Amount">
  </div>
  <div class="buttons">
    <button @click="">Ok</button>
    <button @click="">Cannel</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { onBeforeUpdate, onUpdated, useTemplateRef } from 'vue';
import { useAmounts } from '@/stores/amounts';

const emit = defineEmits(['event:cash'])
const inputRefs = useTemplateRef("inputAmpunt");

const amountStore = useAmounts();
let amount = 0;

onBeforeUpdate(() => {
  amount = amountStore.Get("Cash");
})

onUpdated(() => {
  inputRefs.value?.focus();
})

function update() {
  let inputAmount = inputRefs.value?.value ?? '';
  if (inputAmount != '') {
    let currentAmount = parseInt(inputAmount, 10);
    if (currentAmount != amount) {
      amountStore.Set("Cash", currentAmount);
    }
    inputRefs.value!.value = "";
  }
}

function pressKey(event: KeyboardEvent) {
  if(event.key != 'Enter' && event.key != 'Escape') {
    return;
  }
  
  if(event.key == "Enter") {
    update();
  }

  emit('event:cash')
}

/* 


*/
</script>

<style lang="css" scoped>
.cash-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.input-box {
  margin-top: 30px;
  flex-direction: column;
  gap: 25px;
}

.input-box input {
  width: 200px;
}

.buttons {
  width: 80%;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.buttons button {
  width: 60px;
  height: 30px;
}

</style>