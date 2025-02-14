import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfigStore = defineStore("ConfigStore", () => {
  const mode = ref("");

  function getMode() {
    return localStorage.getItem("system_mode") || "";
  }

  function setMode(mode: "basic" | "advanced") {
    console.assert(mode == "basic" || mode == "advanced");

    localStorage.setItem("system_mode", mode);
  }

  function delMode() {
    localStorage.removeItem("system_mode");
  }

  function InitConfigStore() {
    mode.value = getMode();

    // Default mode is basic.
    if (mode.value == "") {
      mode.value = "basic";
    }
  }

  function IsBasicMode() {
    return mode.value == "basic";
  }

  function AddMode(mode: "basic" | "advanced") {
    setMode(mode);
  }

  function RemoveMode() {
    delMode();
  }

  return { InitConfigStore, IsBasicMode, AddMode, RemoveMode };
});