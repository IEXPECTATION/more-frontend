import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("UserStore", () => {
  const token = ref("");

  function getToken(): string {
    return localStorage.getItem("user_token") || ""
  }

  function setToken(token: string) {
    console.assert(/* isJWT(token) */);
    localStorage.setItem("user_token", token)
  }

  function delToken() {
    localStorage.removeItem("user_token");
  }

  function InitUserSotre() {
    if (token.value != "") {
      return;
    }

    token.value = getToken()
  }

  function IsLogined(): boolean {
    if (token.value == "") {
      return false;
    }

    return true;
  }

  function AddToken(token: string) {
    setToken(token);
  }

  function RemoveToken() {
    delToken();
  }

  return { InitUserSotre, IsLogined, AddToken, RemoveToken };
})