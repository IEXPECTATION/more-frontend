import { GetNetInstance } from "@/net/net_instance";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCommonStore = defineStore("CommonStore", () => {
  const token = ref("");
  const basicMode = ref(false);

  function Logined() {
    restoreMode();
    restoreToken();
    return token.value != "";
  }

  async function Login(user: any) {
    const instance = await GetNetInstance("fetch");
    if (instance == undefined) {
      throw new Error("Unknow Instance!");
    }
    const ok = await instance.Login("http://127.0.0.1:5001/login", user)
    if (!ok) {
      throw new Error("Login Error!");
    }

    token.value = "logined";
    if (!IsBasicMode.value) {
      switchMode();
    }
    saveMode();
    saveToken();
  }

  function Logout() {
    token.value = "";
    removeToken();
  }

  function restoreToken() {
    let raw = localStorage.getItem('token');
    if (raw) {
      token.value = JSON.parse(raw);
    }
  }

  function saveToken() {
    localStorage.setItem('token', JSON.stringify(token.value));
  }

  function removeToken() {
    localStorage.removeItem('token');
  }

  const IsBasicMode = computed(() => {
    return basicMode.value;
  });

  function switchMode() {
    basicMode.value = !basicMode.value;
  }

  function restoreMode() {
    let raw = localStorage.getItem('basic');
    if (raw) {
      basicMode.value = JSON.parse(raw);
    }
  }

  function saveMode() {
    localStorage.setItem('basic', JSON.stringify(basicMode.value));
  }

  return { Logined, Login, Logout, IsBasicMode };
})