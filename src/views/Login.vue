<template>
  <Logo />
  <div class="login-box">
    <h2>Login</h2>
    <button @click="login">Login</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Logo from '@/components/logo.vue';
import { useCommonStore } from '@/stores/common_store';

const commonStore = useCommonStore();
const router = useRouter();

function login() {
  if(!commonStore.Logined()) {
    commonStore.Login();
    router.replace("/");
  }
}
</script>

<style lang="css" scoped>
.login-box {
  height: 60%;
  width: 40%;
  margin: auto;
}
</style>
