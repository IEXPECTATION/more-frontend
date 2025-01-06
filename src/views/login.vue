<template>
  <Logo />
  <div class="container">
    <div class="box">
      <div class="login">
        <h2>Login</h2>
        <p class="signup-switch">Sign up</p>
        <p>Name</p>
        <p>Password</p>
        <button @click="login">Login</button>
      </div>
      <div class="signup">
        <h2>Sign up</h2>
        <p class="login-switch">Login</p>
        <p>Name</p>
        <p>Password</p>
        <button @click="login">Sign up</button>
      </div>
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
  let name = btoa("admin");
  let password = btoa("admin")
  await commonStore.Login({ name, password });
  router.replace("/");
}
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.box {
  width: 40%;
  height: 60%;
  margin: auto;
  position: relative;
  border-radius: 10px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login,
.signup {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffeff;
}

.signup {
  transform: rotateY(-180deg);
}

.flipped {
  transform: rotateY(-180deg);
}

/* .signup {
  position: absolute;
  top: 65px;
  right: 30px;
  color: #808080;
  cursor: pointer;
  font-size: 0.875rem;
} */
</style>
