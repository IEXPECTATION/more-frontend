<template>
  <div class="card-container">
    <div v-for="(item, index) in items" :key="item.name" :class="item.class">
      <p class="title" @click="popup(item.name)">{{ item.name }}</p>
      <p class="amount" :class="index < 3 ? colorize(getAmount(item.name)) : ''" @click="popup(item.name)">{{
        getAmount(item.name) }}</p>

      <div class="buttons">
        <button class="plus-button">+</button>
        <button class="minus-button">-</button>
      </div>
    </div>
  </div>

  <PopupWindow :visible="diaglogVisible" @update:visible="diaglogVisible = $event">
    <template v-if="diaglogName == 'Cash'">
      <Cash @event:close="diaglogVisible = $event" />
    </template>

    <template v-else-if="diaglogName == 'Dream Fund'">
      <DreamFund @event:close="diaglogVisible = $event" />
    </template>

    <template v-else-if="diaglogName == 'Goose'">
      <p class="title" @event:close="diaglogVisible = $event">Goose</p>
    </template>

    <template v-else-if="diaglogName == 'Goldren Egg'">
      <p class="title" @event:close="diaglogVisible = $event">Goldren Egg</p>
    </template>

    <template v-else-if="diaglogName == 'Silver Egg'">
      <p class="title" @event:close="diaglogVisible = $event">Silver Egg</p>
    </template>

  </PopupWindow>

</template>

<script setup lang="ts">
import PopupWindow from '@/components/basic/popup_window.vue';
import Cash from '@/components/basic/cash_popup_window.vue'
import DreamFund from '@/components/basic/dream_fund_popup_window.vue'
import { useAmounts } from '@/stores/amounts';
import { provide, ref } from 'vue';

const amountStore = useAmounts();
const diaglogVisible = ref(false);
const diaglogName = ref("");
const items = [
  {
    name: "Goose",
    class: "box goose",
  },
  {
    name: "Dream Fund",
    class: "box fund",
  },
  {
    name: "Cash",
    class: "box cash",
  },
  {
    name: "Goldren Egg",
    class: "box golden-egg",
  },
  {
    name: "Silver Egg",
    class: "box silver-egg",
  }];

provide("visible", diaglogVisible);

function getAmount(name: string) {
  try {
    return amountStore.Get(name);
  } catch (ex: unknown) {
    return 0;
  }
}

function popup(name: string) {
  diaglogVisible.value = true;
  diaglogName.value = name;
}

function colorize(amount: number): string {
  return amount >= 0 ? "red" : "green";
}
</script>

<style lang="css" scoped>
.card-container {
  height: 100%;
  width: 100%;
  padding: 5% 15%;
  display: grid;
  grid: auto-flow 1fr / 1fr 1fr 1fr;
  gap: 10px;
}

.card-container .box {
  height: 300px;
  padding: 10%;
}

.box:hover .amount.red {
  color: red;
}

.box:hover .amount.green {
  color: green;
}

.box {
  background-color: #fefefe;
  box-shadow: 1px 1px 8px 0px #f0f0f0;
  display: flex;
  flex-direction: column;
  background-color: #fffeff;
  border-radius: 10px;
}

.box:hover .title {
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
}

.box p {
  width: 100%;
  text-align: center;
}

.box .title {
  font-size: 1.5rem;
  flex: 1;
}

.box .amount {
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;
  flex: 1;
}

.golden-egg p {
  color: gold;
}

.silver-egg p {
  color: silver;
}

.box .buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  flex: 1;
}

.buttons button {
  width: 60px;
  height: 30px;
  text-align: center;
  border: none;
  background-color: #eeeeee;
  font-size: 14px;
}

.popup-window {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50%, -50%;
  background-color: grey;
}

.title {
  font-size: 1.2em;
  font-weight: bold;
}
</style>