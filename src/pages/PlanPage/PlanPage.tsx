import { useState } from "react";

import Manual from "../../components/Manual/Manual";
import Order from "../../components/Order/Order";
import PlanHero from "../../components/PlanHero/PlanHero";
import { OrderQuestion, OrderSummary } from "../../utils/types/types";
import { setkeyName } from "../../utils/helpers";
import * as SC from './PlanPageStyled'

import Summary from "../../components/Summary/Summary";
import ModalSummary from "../../components/ModalSummary/ModalSummary";

type Props ={
    toggleModalSummary:()=>void;
}

const PlanPage: React.FC<Props> = ({toggleModalSummary}) => {
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
    <SC.PlanPageStyled >
      <PlanHero />
      <Manual />
      <Order handleOrder={handleOrder} orderSummary={orderSummary}/>
      <Summary orderSummary={orderSummary} toggleModalSummary = {toggleModalSummary}/>
    </SC.PlanPageStyled>
  );
};

export default PlanPage;
