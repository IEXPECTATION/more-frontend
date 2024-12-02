import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCommonStore = defineStore("CommonStore", () => {
  const token = ref("");
  const basicMode = ref(false);

  function Logined() {
    restoreToken();
    restoreMode();
    return token.value != "";
  }

  function Login() {
    if (token.value == "") {
      token.value = "logined";
      console.log("IsBasicMode", IsBasicMode);
      if (!IsBasicMode.value) {
        switchMode();
      }
      saveMode();
      saveToken();
    }
  }

  function Logout() {
    if (token.value == "") {
      return;
    }

    token.value = "";
    deleteToken();
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

  function deleteToken() {
    localStorage.removeItem('token');
  }

  const IsBasicMode = computed(() => {
    return basicMode.value;
  });

  function switchMode() {
    basicMode.value = !basicMode.value;
  }

  function restoreMode() {
    let raw = localStorage.getItem('mode');
    if (raw) {
      basicMode.value = JSON.parse(raw);
    }
  }

  function saveMode() {
    localStorage.setItem('mode', JSON.stringify(basicMode.value));
  }

  return { Logined, Login, Logout, IsBasicMode };
})