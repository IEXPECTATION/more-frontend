<template>
  <div class="window-container" @click.stop>
    <div class="dream-fund-container">
      <p class="title">Update your dream fund!</p>
      <div class="dream-table">
      </div>
      <div class="buttons">
        <button @click="() => { emit('event:close'); }">Ok</button>
        <button @click="() => { emit('event:close'); }">Cannel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAmounts } from '@/stores/amounts';

const emit = defineEmits(['event:close'])
const amountStore = useAmounts();
const dreamItems: number[] = [1, 2, 3];

</script>

<style lang="css" scoped>
.window-container {
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

.dream-table {
  width: 80%;
  height: 60%;
  margin-right: 50px;
  display: grid;
  grid-template: repeat(5, 20px 1fr) / repeat(5, 20px 0);
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