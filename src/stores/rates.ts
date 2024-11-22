import { defineStore } from "pinia";
import { ref } from "vue";

const useRateStore = defineStore("Rate", () => {
  let goldrenRate = ref(0);
  let silverRate = ref(0);

  function Get(name: string) {
    switch (name) {
      case "Goose":
        return goldrenRate.value;
      case "Dream Fund":
        return silverRate.value;
      default:
        throw new Error("Unknown name!");
    }
  }

  function Set(name: string, value: number) {
    switch (name) {
      case "Goose":
        goldrenRate.value = value;
      case "Dream Fund":
        silverRate.value = value;
      default:
        throw new Error("Unknown name!");
    }
  }
  return { Get, Set };
})