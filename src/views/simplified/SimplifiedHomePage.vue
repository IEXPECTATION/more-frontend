<template>
  <div class="homepage-container">
    <div v-for="item in items" :key="item.name" :class="item.class">
      <p class="title">{{ item.name }}</p>
      <p class="amount" :class="colorize(item)" @click="popup(item.name)">{{ item.amount }}</p>
      <div class="buttons" v-if="item.name.includes('Egg')">
        <button class="plus-button" @click="item.amount++">Rate</button>
        <button class="minus-button" @click="item.amount--">Period</button>
      </div>
      <div class="buttons" v-else>
        <button class="plus-button" @click="item.amount++">+</button>
        <button class="minus-button" @click="item.amount--">-</button>
      </div>
    </div>
  </div>

  <Diaglog :visible="enable" @update:visible="enable = $event">
    Hello World
  </Diaglog>

</template>

<script setup lang="ts">
import Diaglog from '@/components/simplified/diaglog.vue';
import { reactive, ref } from 'vue';

interface Card {
  name: string,
  amount: number,
  class: string,
};

const items = reactive<Card[]>([
  {
    name: "Goose",
    amount: 0,
    class: "box goose",
  },
  {
    name: "Dream Fund",
    amount: 0,
    class: "box fund",
  },
  {
    name: "Cash",
    amount: 0,
    class: "box cash",
  },
  {
    name: "Goldren Egg",
    amount: 0,
    class: "box golden-egg",
  },
  {
    name: "Silver Egg",
    amount: 0,
    class: "box silver-egg",
  }]);

const enable = ref(false);

function popup(name: string) {
  enable.value = true;
}

function colorize(item: Card): string {
  if (item.name.includes("Egg")) {
    return "";
  }

  return item.amount >= 0 ? "red" : "green";
}
</script>

<style lang="css" scoped>
.homepage-container {
  height: 100%;
  width: 100%;
  padding: 5% 15%;
  display: grid;
  grid: auto-flow 1fr / 1fr 1fr 1fr;
  gap: 10px;
}

.homepage-container .box {
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
}

.box:hover .title {
  font-size: 2em;
  font-weight: 600;
}

.box p {
  width: 100%;
  text-align: center;
}

.box .title {
  font-size: 1.5em;
  flex: 1;
}

.box .amount {
  font-size: 1.2em;
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
}

.popup-window {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
}
</style>