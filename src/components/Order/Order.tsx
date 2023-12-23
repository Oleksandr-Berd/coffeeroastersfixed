import * as SC from "./OrderStyled";

import { order } from "../../db/order";
import OrderItem from "./OrderItem";

const Order: React.FC = () => {
    
  return (
    <SC.CommonList>
      {order.map(({ name, options, id }) => (
        <OrderItem key={id} name={name} options={options}/>
      ))}
    </SC.CommonList>
  );
};

export default Order;
