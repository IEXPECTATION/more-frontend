import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useLoginState = defineStore("loginState", () => {
  const loginState = ref(false);
  return { loginState };
});