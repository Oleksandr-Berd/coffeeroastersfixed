import * as SC from './SummaryStyled'

import { OrderSummary } from "../../utils/types/types";

type Props = {
  orderSummary: OrderSummary;
  toggleModalSummary:()=>void;
};

const Summary: React.FC<Props> = ({ orderSummary, toggleModalSummary }) => {

const {drinkWay, coffeeType, coffeeVolume, grindWay, frequency} = orderSummary;

const handleDisable = () => {
  const isDisabled = Object.values(orderSummary).includes("_______") && orderSummary.drinkWay !== "Capsule"

  return isDisabled
}

  return (
    <SC.CommonCon>
      <SC.SummaryCon>
        <SC.Title>order summary</SC.Title>
        <SC.Body>
          "I drink my coffee {drinkWay === "Capsule" ? "using" : "as"} <span>{drinkWay}</span>, with a <span>{coffeeType}</span> type of
          bean. <span>{coffeeVolume}</span> {drinkWay !== "Capsule" ? `ground ala `: null}{drinkWay !== "Capsule" ? <span>{grindWay}</span> : null}, sent to me <span>{frequency}</span>
          ."
        </SC.Body>
      </SC.SummaryCon>
      <SC.SubmitOrderBtn onClick={toggleModalSummary} disabled={handleDisable()} status={handleDisable()}>Create my plan!</SC.SubmitOrderBtn>
    </SC.CommonCon>
  );
};

export default Summary;
<div>
  <div></div>
  <button>Create</button>
</div>;
