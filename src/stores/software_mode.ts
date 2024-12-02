import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useSoftwareMode = defineStore("softwareMode", () => {
  const softwareMode = ref(false);
  
  function SaveMode() {
    localStorage.setItem("software_mode", JSON.stringify(softwareMode.value));
  }

  function RestoreMode() {
    const storedMode = localStorage.getItem("software_mode");
    if(storedMode) {
      softwareMode.value = JSON.parse(storedMode);
    }
  }

  return { softwareMode, SaveMode, RestoreMode };
});