<template>
  <div class="window-container" @click.stop>
    <div class="cash-container">
      <p class="title">Update your cash!</p>
      <div class="input-box">
        <input id="input-amount" type="number" ref="inputAmpunt" @keydown="pressKey" placeholder="Type your new Amount">
      </div>
      <div class="buttons">
        <button @click="() => { update(); emit('event:close', false);; }">Ok</button>
        <button @click="() => { emit('event:close', false); }">Cannel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, nextTick, useTemplateRef, watch, type Ref } from 'vue';
import { useAmounts } from '@/stores/amounts';

const emit = defineEmits(['event:close'])
const inputRefs = useTemplateRef("inputAmpunt");
const amountStore = useAmounts();

const visible = inject('visible') as Ref<boolean, boolean>;

watch(visible, async (newValue) => {
  if (newValue) {
    nextTick(async () => {
      inputRefs.value?.focus();
      inputRefs.value!.value = "";
    })
  }
});

function update() {
  let amount = amountStore.Get("Cash");
  let inputAmount = inputRefs.value?.value ?? '';
  if (inputAmount != '') {
    let currentAmount = parseInt(inputAmount, 10);
    if (currentAmount != amount) {
      amountStore.Set("Cash", currentAmount);
    }
  }
}

function pressKey(event: KeyboardEvent) {
  if (event.key != 'Enter' && event.key != 'Escape') {
    return;
  }

  if (event.key == "Enter") {
    update();
  }

  emit('event:close', false)
}
</script>

<style lang="css" scoped>
.window-container {
  background: white;
  width: 20%;
  height: 30%;
  border-radius: 8px;
}

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
  font-size: 1rem;
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