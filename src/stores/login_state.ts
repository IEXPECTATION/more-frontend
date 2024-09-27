import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const login_state = defineStore("loginState", () => {
  const LoginState = ref(false);

  return { LoginState };
});