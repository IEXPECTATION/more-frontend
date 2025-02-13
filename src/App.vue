<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { initStore, useUserStore } from './stores';

const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  initStore();

  if (!userStore.IsLogined()) {
    router.replace("/login");
  }
})
</script>

<style lang="css">
* {
  user-select: none;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #fafcff;
}
</style>