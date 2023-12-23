import { OrderQuestion } from "./types/types";

export const setkeyName = (name: OrderQuestion) => {
    const keyName = {
      "How do you drink your coffee?": "drinkWay",
      "What type of coffee?": "coffeeType",
      "How much would you like?": "coffeeVolume",
      "Want us to grind them?": "grindWay",
      "How often should we deliver?": "frequency",
    };

    return keyName[name];
  };