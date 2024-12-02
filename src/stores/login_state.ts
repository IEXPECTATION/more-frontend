import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useLoginStore = defineStore("loginState", () => {
  const loginState = ref(false);
  
  function SaveState() {
    localStorage.setItem('login_state', JSON.stringify(loginState.value))
  }

  function RestoreState() {
    const storedState = localStorage.getItem('login_state');
    if(storedState) {
      loginState.value = JSON.parse(storedState)
    }
  }

  return { loginState, SaveState, RestoreState };
});