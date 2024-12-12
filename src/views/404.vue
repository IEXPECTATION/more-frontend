<template>
  <p>404 Not Found</p>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.title = "Not Found🤔";
})

onUnmounted(() => {
  document.title = "More";
})
</script>

<style lang="css" scoped></style>