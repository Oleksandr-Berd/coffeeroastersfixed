import { useState } from "react";

import Manual from "../../components/Manual/Manual";
import Order from "../../components/Order/Order";
import PlanHero from "../../components/PlanHero/PlanHero";
import { OrderQuestion, OrderSummary } from "../../utils/types/types";



const PlanPage: React.FC = () => {
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    drinkWay: "Filter",
    coffeeType: "Decaf",
    coffeeVolume: "250g",
    grindWay: "Wholeeban",
    frequency: "Every week",
  });

  const handleOrder = (name: OrderQuestion, title: string): void => {
    const setkeyName = (name: OrderQuestion) => {
      const keyName = {
        "How do you drink your coffee?": "drinkWay",
        "What type of coffee?": "coffeeType",
        "How much would you like?": "coffeeVolume",
        "Want us to grind them?": "grindWay",
        "How often should we deliver?": "frequency",
      };

      return keyName[name];
    };

    setOrderSummary((prevOrderSummary) => ({
      ...prevOrderSummary,
      [setkeyName(name)]: title,
    }));
  };
  
  return (
    <div>
      <PlanHero />
      <Manual />
      <Order handleOrder={handleOrder} />
    </div>
  );
};

export default PlanPage;
