<template>
  <Logo />
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <p class="signup">Sign up</p>
      <p>Name</p>
      <p>Password</p>
      <button @click="login">Login</button>
    </div>
    <div class="signup-box" style="display: none">
      <h2>Sign up</h2>
      <p class="signup">Login</p>
      <p>Name</p>
      <p>Password</p>
      <button @click="login">Sign up</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Logo from '@/components/logo.vue';
import { useCommonStore } from '@/stores/login';
import { onMounted } from 'vue';

const commonStore = useCommonStore();
const router = useRouter();

onMounted(() => {
  if (commonStore.Logined()) {
    router.replace("/");
  }
})

async function login() {
  await commonStore.Login();
  router.replace("/");
}
</script>

<style lang="css" scoped>
.login-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center
}

.login-box {
  height: 60%;
  width: 30%;
  background-color: #fefefe;
  margin: auto;
  padding: 50px 0;
  position: relative;
}

.login-box h2 {
  text-align: center;
}

.signup {
  position: absolute;
  top: 65px;
  right: 30px;
  color: #808080;
  cursor: pointer;
  font-size: 0.875rem;
}
</style>
