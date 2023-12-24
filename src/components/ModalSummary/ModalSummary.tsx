import { useNavigate } from "react-router-dom";

import * as SC from "./ModalSummaryStyled";
import { OrderSummary } from "../../utils/types/types";

type Props = {
  toggleModalSummary: () => void;
  orderSummary: OrderSummary;
};

const ModalSummary: React.FC<Props> = ({
  toggleModalSummary,
  orderSummary,
}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleModalSummary();
    navigate("/");
  };

  const { drinkWay, coffeeType, coffeeVolume, grindWay, frequency } =
    orderSummary;

  const priceClaculation = (coffeeVolume: string, frequency: string) => {
    const g250: any = {
      "Every week": "$7.20",
      "Every two weeks": "$9.60",
      "Every month": "$12.00",
    };

    const g500: any = {
      "Every week": "$13.00",
      "Every two weeks": "$17.50",
      "Every month": "$22.00",
    };

    const g1000: any = {
      "Every week": "$22.00",
      "Every two weeks": "$32.50",
      "Every month": "$42.00",
    };

    let price;

    switch (coffeeVolume) {
      case "250g":
        price = g250[frequency];
        break;
      case "500g":
        price = g500[frequency];
        break;
      case "1000g":
        price = g1000[frequency];
        break;
      default:
        break;
    }

    const adjustedPrice = price + "/" + frequency.split(" ").slice(1).join(" ")

    return adjustedPrice
  };


  return (
    <SC.SummaryOverlay>
      <SC.OrderSummaryCon>
        <div>
          <h2>Order Summary</h2>
        </div>
        <div>
          <p>
            {" "}
            "I drink my coffee as <span>{drinkWay}</span>, with a{" "}
            <span>{coffeeType}</span> type of bean. <span>{coffeeVolume}</span>{" "}
            ground ala <span>{grindWay}</span>, sent to me{" "}
            <span>{frequency}</span>
            ."
          </p>
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <button onClick={handleCheckout}>Checkout - {priceClaculation(coffeeVolume, frequency)}</button>
        </div>
      </SC.OrderSummaryCon>
    </SC.SummaryOverlay>
  );
};

export default ModalSummary;
