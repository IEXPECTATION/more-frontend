<template>
  <p @click="backHome">MOney REcipe</p>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function backHome() {
  router.replace("/");
}
</script>

<style scoped>
p {
  position: absolute;
  font-size: 1.4em;
  top: .5%;
  left: 1%;
  padding: 10px;
  color: white;
  background-color: #588ebc;
  font-weight: bold;
  border-radius: 8px;
}
</style>