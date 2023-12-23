import * as SC from "./OrderStyled";

import arrow from "../../assets/img/plan/desktop/icon-arrow.svg";
import { useState } from "react";

type Props = {
  name: string;
  options: {
    title: string;
    body: string;
  }[];
};

const OrderItem: React.FC<Props> = ({ name, options }) => {
const [isOptions, setIsOptions] = useState<boolean>(false)

const toggleOptions = ():void =>{
    setIsOptions(!isOptions)
}

  return (
    <SC.Item isOptions={isOptions} key={name}>
      <SC.TitleCon>
        <SC.Title>{name}</SC.Title>
        <SC.ToggleBtn onClick={toggleOptions}>
          <img src={arrow} alt="arrow" />
        </SC.ToggleBtn>
      </SC.TitleCon>
      {isOptions ? 
      <ul>
        {   options.map(({title, body}) => <SC.OptionsItem key={title}>
        <SC.OptionsItemTitle>{title}</SC.OptionsItemTitle>
        <SC.OptionsItemBody>{body}</SC.OptionsItemBody>
      </SC.OptionsItem>)}
      </ul>
   
      : null}
    </SC.Item>
  );
};

export default OrderItem;
