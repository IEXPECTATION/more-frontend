<template>
  <div class="window-container" @click.stop>
    <div class="dream-fund-container">
      <p class="title">Update your dream fund!</p>
      <div class="dream-table-box">
        <table class="dream-table">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        <button>Previous</button>
        <button>Next</button>
      </div>

      <div class="buttons">
        <button @click="() => { emit('event:close', false); }">Ok</button>
        <button @click="() => { emit('event:close', false); }">Cannel</button>
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
  font-size: 1rem;
  font-weight: bold;
}

.dream-table-box {
  width: 80%;
  height: 60%;
}

.dream-table {
  width: 100%;
  height: 80%;
  margin-right: 50px;
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