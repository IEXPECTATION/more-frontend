<template>
  <Logo />
  <div class="login-box">
    <h2>Login</h2>
    <button @click="login">Login</button>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login_state';
import { useSoftwareMode } from '@/stores/software_mode';
import { useRouter } from 'vue-router';
import Logo from '@/components/logo.vue';

const softwareMode = useSoftwareMode();
const loginStore = useLoginStore();
const router = useRouter();
function login() {
  softwareMode.basic = true;
  loginStore.loginState = true;
  router.replace("/");
}
</script>

<style lang="css" scoped>
.login-box {
  height: 60%;
  width: 40%;
  margin: auto;
}
</style>
