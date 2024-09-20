<template>
  <div class="container">
    <div v-for="item in items" :key="item.name" :class="item.class">
      <p class="title">{{ item.name }}</p>
      <p class="amount" @click="popup(item.name)">{{ item.amount }}</p>
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
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const items = reactive([
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

function popup(name: string) {
  alert(`Hello ${name}!`);
}
</script>

<style lang="css" scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 5% 15%;
  display: grid;
  grid: auto-flow 1fr / 1fr 1fr 1fr;
  gap: 10px;
}

.container .box {
  height: 300px;
  padding: 10%;
}

.box {
  background-color: #fefefe;
  box-shadow: 1px 1px 8px 0px #f0f0f0;
}

.box:hover .title {
  font-size: 2em;
}

.box p {
  width: 100%;
  text-align: center;
}

.box .title {
  font-size: 1.5em;
}

.box .amount {
  margin-top: 3%;
  font-size: 1.2em;
  font-weight: bolder;
  cursor: pointer;
}

.golden-egg p {
  color: gold;
}

.silver-egg p {
  color: silver;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.buttons button {
  width: 50px;
  height: 30px;
  text-align: center;
}
</style>