import { useState } from "react";

import Manual from "../../components/Manual/Manual";
import Order from "../../components/Order/Order";
import PlanHero from "../../components/PlanHero/PlanHero";
import { OrderQuestion, OrderSummary } from "../../utils/types/types";
import { setkeyName } from "../../utils/helpers";
import * as SC from './PlanPageStyled'

import Summary from "../../components/Summary/Summary";

type Props ={
    toggleModalSummary:()=>void;
    orderSummary:OrderSummary;
    handleOrder:(name: OrderQuestion, title: string) => void 
}

const PlanPage: React.FC<Props> = ({toggleModalSummary, orderSummary, handleOrder}) => {
  
  


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
