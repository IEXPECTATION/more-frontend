import { defineStore } from "pinia";
import { ref } from "vue";

export const useAmounts = defineStore("Amount", () => {
  let goose = ref(0);
  let dreamFund = ref(0);
  let cash = ref(0);
  let goldrenEgg = ref(0);
  let silverEgg = ref(0);

  function Get(name: string) {
    switch (name) {
      case "Goose":
        return goose.value;
      case "Dream Fund":
        return dreamFund.value;
      case "Cash":
        return cash.value;
      case "Goldren Egg":
        return goldrenEgg.value;
      case "Silver Egg":
        return silverEgg.value;
      default:
        throw new Error("Unknown name!");
    }
  }

  function Set(name: string, amount: number) {
    switch (name) {
      case "Goose":
        goose.value = amount;
        break;
      case "Dream Fund":
        dreamFund.value = amount;
        break;
      case "Cash":
        cash.value = amount;
        break;
      case "Goldren Egg":
        goldrenEgg.value = amount;
        break;
      case "Silver Egg":
        silverEgg.value = amount;
        break;
      default:
        throw new Error("Unknown name!");
    }

    sync()
  }

  function sync() {
  }

  return { Get, Set };
})