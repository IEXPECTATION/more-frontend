<template>
  <div class="diaglog-container" v-show="props.visible" @click="close">
    <div class="diaglog-box" @click.stop>
      <div class="user-input-box">
        <template v-if="props.name == 'Cash'">
          <p class="title">Update your Cash!</p>
          <div class="input-box">
            <input id="input-amount" type="number" ref="inputAmpunt" @keydown="pressKey"
              placeholder="Input your new Amount">
          </div>
        </template>
        <template v-else-if="props.name == 'Dream Fund'">
          <p class="title">Dream Fund</p>
        </template>
      </div>
      <div class="buttons">
        <button @click="update">Ok</button>
        <button @click="close">Cannel</button>
      </div>
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
  if (inputRefs.value) {
    inputRefs.value.value = "";
  }
}

function update() {
  let inputAmount = inputRefs.value?.value ?? '';
  if (inputAmount != '') {
    let currentAmount = parseInt(inputAmount, 10);
    if (currentAmount != amount) {
      amountStore.Set(props.name, currentAmount);
    }
  }
  close();
}

function pressKey(event: KeyboardEvent) {
  if (event.key == "Enter") {
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
  margin: 40px 0;
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-input-box .title {
  font-size: 16px;
  font-weight: bold
}

.input-box {
  margin-top: 30px;
  flex-direction: column;
  gap: 25px;
}



.input-box input {
  width: 240px;
}

.buttons {
  margin-top: 50px;
  display: flex;
  justify-content: space-around
}

.buttons button {
  width: 60px;
  height: 30px;
}
</style>