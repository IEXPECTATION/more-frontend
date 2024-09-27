<template>
  <div class="diaglog-container" v-show="props.visible" @click="close">
    <div class="diaglog-box" @click.stop>
      <slot></slot>
      <input type="text" ref="amountInput" @keydown="keydown">
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onUpdated, useTemplateRef } from 'vue';
const props = defineProps(["visible"]);
const emit = defineEmits(['update:visible'])
const inputRefs = useTemplateRef("amountInput");

onUpdated(() => {
  inputRefs.value?.focus();
})

function close() {
  emit('update:visible', false);
}

function keydown(event: KeyboardEvent) {
  console.log("keydown...")
  if (event.key == "Escape") {
    console.log("is escape")
    close();
  }
  console.log("end.")
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
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
</style>