import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useSoftwareMode = defineStore("softwareMode", () => {
  const basic = ref(false);
  return { basic };
});