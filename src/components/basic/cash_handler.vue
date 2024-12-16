<template>
  <div class="cash-container">
    <p class="title">Update your Cash!</p>
    <div class="input-box">
      <input id="input-amount" type="number" ref="inputAmpunt" @keydown="pressKey" placeholder="Input your new Amount">
    </div>
    <div class="buttons">
      <button @click="() => { update(); emit('event:cash'); }">Ok</button>
      <button @click="() => { emit('event:cash'); }">Cannel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { useAmounts } from '@/stores/amounts';

const emit = defineEmits(['event:cash'])
const inputRefs = useTemplateRef("inputAmpunt");
const amountStore = useAmounts();

onMounted(() => {
  console.log("cash: updating!");
  inputRefs.value?.focus();
})

function update() {
  let amount = amountStore.Get("Cash");
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
  if (event.key != 'Enter' && event.key != 'Escape') {
    return;
  }

  if (event.key == "Enter") {
    update();
  }

  emit('event:cash')
}
</script>

<style lang="css" scoped>
.cash-container {
  height: 100%;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.input-box input {
  width: 180px;
}

.buttons {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.buttons button {
  width: 60px;
  height: 30px;
}
</style>