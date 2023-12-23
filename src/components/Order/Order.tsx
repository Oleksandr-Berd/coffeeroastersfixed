import * as SC from "./OrderStyled";

import { order } from "../../db/order";
import OrderItem from "./OrderItem";
import { OrderQuestion, OrderSummary } from "../../utils/types/types";

type Props = {
    handleOrder:(name: OrderQuestion, title:string)=>void,
  orderSummary: OrderSummary,

}

const Order: React.FC<Props> = ({handleOrder, orderSummary}) => {
    
  return (
    <SC.CommonList>
      {order.map(({ name, options, id }) => (
        <OrderItem key={id} name={name} options={options} handleOrder={handleOrder} orderSummary={orderSummary}/>
      ))}
    </SC.CommonList>
  );
};

export default Order;
