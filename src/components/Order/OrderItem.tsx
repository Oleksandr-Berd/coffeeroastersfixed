import * as SC from "./OrderStyled";

import arrow from "../../assets/img/plan/desktop/icon-arrow.svg";
import { useState } from "react";
import { OrderQuestion } from "../../utils/types/types";

type Props = {
  name: any;
  options: {
    title: string;
    body: string;
  }[];
  handleOrder:(name: OrderQuestion, title:string)=>void
};

const OrderItem: React.FC<Props> = ({ name, options, handleOrder }) => {
const [isOptions, setIsOptions] = useState<boolean>(false)

const toggleOptions = ():void =>{
    setIsOptions(!isOptions)
}

const handleOption = (name:OrderQuestion , title:string) => {
    console.log(name);
    
handleOrder(name, title)    

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
        {   options.map(({title, body}) => <SC.OptionsItem key={title} onClick={() =>handleOption(name , title)}>
        <SC.OptionsItemTitle>{title}</SC.OptionsItemTitle>
        <SC.OptionsItemBody>{body}</SC.OptionsItemBody>
      </SC.OptionsItem>)}
      </ul>
   
      : null}
    </SC.Item>
  );
};

export default OrderItem;
