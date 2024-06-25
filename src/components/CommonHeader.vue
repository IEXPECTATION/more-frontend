<template>
  <header class="header-box">
    <h1>{{ Log }}</h1>
    <p @click="changeTab">{{ TabName }}</p>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const Log = "More";
const TabName = ref("");
let defaultTabName = "Default Tab Name";
TabName.value = defaultTabName;

function changeTab() {
  TabName.value = "You change the tab name!";
}
</script>

<style scoped>
.header-box {
  display: flex;
  background-color: #777;
}

.header-box p:hover {
  cursor: pointer
}
</style>