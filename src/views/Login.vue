<template>
  Login Page
  <button @click="login">Login</button>
</template>

<script setup lang="ts">
import { useSoftwareMode } from '@/stores/software_mode';
import { useRouter } from 'vue-router';

const softwareMode = useSoftwareMode();
const router = useRouter();
function login() {
  softwareMode.basic = true;
  router.replace("/");
}
</script>

<style lang="css" scoped></style>
