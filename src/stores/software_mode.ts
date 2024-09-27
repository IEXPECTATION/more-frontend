import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useSoftwareMode = defineStore("softwareMode", () => {
  const simpified = ref(false);
  return { simpified };
});