import { GetNetInstance } from "@/net/net_instance";
import { defineStore } from "pinia";
import { ref } from "vue";

export enum CardEnum {
  Start,

  Cash,
  DreamFund,
  Goose,
  GoldrenEgg,
  SilverEgg,

  End
}

export const useCardStore = defineStore("CardStore", () => {
  const cards = ref([] as number[])

  function InitCardStore() {
    const instance = GetNetInstance("fetch");
    const response = instance?.GetAllCardsData("");
    // ...
  }

  function GetTargetCardData(card: CardEnum) {
    if (card > CardEnum.Start && card < CardEnum.End) {
      return cards.value[card];
    }

    console.assert(false);
  }

  function SetTargetCardData(card: CardEnum, value: number) {
    if (card > CardEnum.Start && card < CardEnum.End) {
      cards.value[card] = value;
      return;
    }

    console.assert(false);
  }

  return { InitCardStore, GetTargetCardData, SetTargetCardData };
});