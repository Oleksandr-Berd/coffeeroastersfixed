import { useState } from "react";

import Manual from "../../components/Manual/Manual";
import Order from "../../components/Order/Order";
import PlanHero from "../../components/PlanHero/PlanHero";
import { OrderQuestion, OrderSummary } from "../../utils/types/types";
import { setkeyName } from "../../utils/helpers";
import Summary from "../../components/Summary/Summary";



const PlanPage: React.FC = () => {
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    drinkWay: "Filter",
    coffeeType: "Decaf",
    coffeeVolume: "250g",
    grindWay: "Wholebean",
    frequency: "Every week",
  });

  const handleOrder = (name: OrderQuestion, title: string): void => {
    

    setOrderSummary((prevOrderSummary) => ({
      ...prevOrderSummary,
      [setkeyName(name)]: title,
    }));
  };
  
  return (
    <div>
      <PlanHero />
      <Manual />
      <Order handleOrder={handleOrder} orderSummary={orderSummary}/>
      <Summary orderSummary={orderSummary}/>
    </div>
  );
};

export default PlanPage;
