<template>
  <Logo />
  <div class="container">
    <div class="box" :class="flipped ? 'flipped' : ''">
      <div class="login">
        <h2>Login</h2>
        <p class="switch" @click="flip">Sign up</p>
        <div class="input-container">
          <div class="user-name">
            <p>User name</p>
            <input type="text" name="" id="" ref="loginNameInput">
          </div>
          <div class="user-password">
            <p>Password</p>
            <input type="password" name="" id="" ref="loginPasswordInput">
          </div>
        </div>
        <button :disabled="ongoing" @click="login">Login</button>
      </div>
      <div class="signup">
        <h2>Sign up</h2>
        <p class="switch" @click="flip">Log in</p>
        <div class="input-container">
          <div class="user-name">
            <p>User name</p>
            <input type="text" name="" id="" ref="signupNameInput">
          </div>
          <div class="user-password">
            <p>Password</p>
            <input type="password" name="" id="" ref="signupPasswordInput">
          </div>
        </div>
        <button @click="signup">Sign up</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Logo from '@/components/logo.vue';
import { useCommonStore } from '@/stores/regester';
import { nextTick, onMounted, ref, useTemplateRef } from 'vue';
import type { User } from "@/dao/user";
import { useUserStore } from '@/stores';
import { Login } from '@/service/login';

const ongoing = ref(false);
const commonStore = useCommonStore();
const userStore = useUserStore();
const router = useRouter();
const loginNameInput = useTemplateRef("loginNameInput");
const loginPasswordInput = useTemplateRef("loginPasswordInput");
const signupNameInput = useTemplateRef("signupNameInput");
const signupPasswordInput = useTemplateRef("signupPasswordInput");
const flipped = ref(false);

onMounted(() => {
  if (userStore.IsLogined()) {
    router.push("/");
  }
})

async function flip(_: MouseEvent) {
  flipped.value = !flipped.value;

  nextTick(async () => {
    if (flipped.value) {
      if (signupNameInput.value) {
        signupNameInput.value.value = "";
      }
      if (signupPasswordInput.value) {
        signupPasswordInput.value.value = "";
      }
    } else {
      if (loginNameInput.value) {
        loginNameInput.value.value = "";
      }
      if (loginPasswordInput.value) {
        loginPasswordInput.value.value = "";
      }
    }
  })
}

async function login(_: MouseEvent) {
  console.assert(!flipped.value);

  ongoing.value = true;
  const name = loginNameInput.value?.value ?? "";
  if (name == "") {
    return;
  }

  const password = loginPasswordInput.value?.value ?? "";
  if (password == "") {
    return;
  }

  const user: User = {
    PeopleId: 0,
    Name: name,
    Password: password,
  };

  const ok = await Login(user);
  if (ok) {
    router.push("/");
  }

  ongoing.value = false;
}

async function signup(_: MouseEvent) {
  console.assert(flipped.value);
  const name = signupNameInput.value?.value ?? "";
  if (name == "") {
    return;
  }

  const password = signupPasswordInput.value?.value ?? "";
  if (password == "") {
    return;
  }

  const user: User = {
    Name: name,
    Password: password,
  };

  try {
    await commonStore.Signup(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.name, error.message);
    }
    return;
  }
  router.push("/");
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
  width: 25%;
  height: 40%;
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
  background-color: #fffeff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.user-password {
  margin-top: 5%;
}

.signup {
  transform: rotateY(-180deg);
}

.flipped {
  transform: rotateY(-180deg);
}

.switch {
  position: absolute;
  top: 65px;
  right: 30px;
  font-size: 0.875rem;
  color: #808080;
  cursor: pointer;
}
</style>
