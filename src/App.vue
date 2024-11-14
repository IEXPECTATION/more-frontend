<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useLoginState } from './stores/login_state';
import { useRouter } from 'vue-router';
const loginState = useLoginState();
const router = useRouter()
onMounted(() => {
  if(!loginState.loginState) {
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
  background-color: #FAFCFF;
}
</style>