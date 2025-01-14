<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCommonStore } from './stores/regester';
const router = useRouter();
const commonStore = useCommonStore();

onMounted(() => {
  if (!commonStore.Logined()) {
    router.push("/login");
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