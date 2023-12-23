import * as SC from "./OrderStyled";

import arrow from "../../assets/img/plan/desktop/icon-arrow.svg";
import { useState } from "react";
import { OrderProps, OrderQuestion } from "../../utils/types/types";
import { setkeyName } from "../../utils/helpers";

const OrderItem: React.FC<OrderProps> = ({
  name,
  options,
  handleOrder,
  orderSummary,
}) => {
  const [isOptions, setIsOptions] = useState<boolean>(false);

  const toggleOptions = (): void => {
    setIsOptions(!isOptions);
  };

  const handleOption = (name: OrderQuestion, title: string) => {

    handleOrder(name, title);
  };
  const handleActive = (title:string) => {
    // const activeOptionsSet = setkeyName(name)
    const chosenOption = Object.entries(orderSummary).find(el => el.includes(title))


if (chosenOption && chosenOption[1] === title){
    return "active";

}    
    
    return
  
  };
  

  return (
    <SC.Item isOptions={isOptions} key={name}>
      <SC.TitleCon>
        <SC.Title>{name}</SC.Title>
        <SC.ToggleBtn onClick={toggleOptions}>
          <img src={arrow} alt="arrow" />
        </SC.ToggleBtn>
      </SC.TitleCon>
      {isOptions ? (
        <ul>
          {options.map(({ title, body }) => (
            <SC.OptionsItem
              key={title}
              onClick={() => handleOption(name, title)}
              status={handleActive(title)}
            >
              <SC.OptionsItemTitle>{title}</SC.OptionsItemTitle>
              <SC.OptionsItemBody>{body}</SC.OptionsItemBody>
            </SC.OptionsItem>
          ))}
        </ul>
      ) : null}
    </SC.Item>
  );
};

export default OrderItem;
