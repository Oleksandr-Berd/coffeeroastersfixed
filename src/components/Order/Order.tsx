import * as SC from "./OrderStyled";

import { order } from "../../db/order";
import OrderItem from "./OrderItem";
import { OrderQuestion } from "../../utils/types/types";

type Props = {
    handleOrder:(name: OrderQuestion, title:string)=>void
}

const Order: React.FC<Props> = ({handleOrder}) => {
    
  return (
    <SC.CommonList>
      {order.map(({ name, options, id }) => (
        <OrderItem key={id} name={name} options={options} handleOrder={handleOrder}/>
      ))}
    </SC.CommonList>
  );
};

export default Order;
