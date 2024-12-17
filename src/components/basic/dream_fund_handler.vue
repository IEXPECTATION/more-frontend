<template>
  <div class="handler-container" @click.stop>
    <div class="dream-fund-container">
      <p class="title">Update your dream fund!</p>
      <div class="dream-table">

      </div>
      <div class="buttons">
        <button @click="() => { emit('event:cash'); }">Ok</button>
        <button @click="() => { emit('event:cash'); }">Cannel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAmounts } from '@/stores/amounts';

const emit = defineEmits(['event:cash'])
const amountStore = useAmounts();
</script>

<style lang="css" scoped>
.handler-container {
  background: white;
  width: 40%;
  height: 60%;
  border-radius: 8px;
}

.dream-fund-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

</style>