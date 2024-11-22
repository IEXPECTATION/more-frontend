import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useLoginStore = defineStore("loginState", () => {
  const loginState = ref(false);
  return { loginState };
});