import * as SC from './SummaryStyled'

import { OrderSummary } from "../../utils/types/types";

type Props = {
  orderSummary: OrderSummary;
};

const Summary: React.FC<Props> = ({ orderSummary }) => {

const {drinkWay, coffeeType, coffeeVolume, grindWay, frequency} = orderSummary

  return (
    <SC.CommonCon>
      <SC.SummaryCon>
        <SC.Title>order summary</SC.Title>
        <SC.Body>
          "I drink my coffee as <span>{drinkWay}</span>, with a <span>{coffeeType}</span> type of
          bean. <span>{coffeeVolume}</span> ground ala <span>{grindWay}</span>, sent to me <span>{frequency}</span>
          ."
        </SC.Body>
      </SC.SummaryCon>
      <SC.SubmitOrderBtn>Create my plan!</SC.SubmitOrderBtn>
    </SC.CommonCon>
  );
};

export default Summary;
<div>
  <div></div>
  <button>Create</button>
</div>;
