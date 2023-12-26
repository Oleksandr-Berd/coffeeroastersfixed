import { useMediaQuery } from "usehooks-ts";

import * as SC from "./OrderStyled";

import { order, orderNav } from "../../db/order";
import OrderItem from "./OrderItem";
import { OrderQuestion, OrderSummary } from "../../utils/types/types";
import NavItem from "./OrderDeskNavItem";
import { useState } from "react";

type Props = {
  handleOrder: (name: OrderQuestion, title: string) => void;
  orderSummary: OrderSummary;
};

const Order: React.FC<Props> = ({ handleOrder, orderSummary }) => {
  const [isOpen, setIsOpen] = useState<number[]>([]);

  const isDesktop = useMediaQuery("(min-width:1440px)");

  const handleOpen = (id: number) => {
    if (isOpen.includes(id)) {
      setIsOpen(isOpen.filter((el) => el !== id));
    } else {
      setIsOpen((prev) => [...prev, id]);
    }
  };


  return (
    <>
      {isDesktop ? (
        <SC.CommonCon>
          <SC.NavList>
            {orderNav.map(({ id, title }) => (
              <NavItem key={id} id={id} title={title} isOpen={isOpen} status={orderSummary.drinkWay === "Capsule"
                ? "disabled"
                : false}/>
            ))}
          </SC.NavList>
          <SC.CommonList>
            {order.map(({ name, options, id }) => (
              <OrderItem
                key={id}
                id={id}
                name={name}
                options={options}
                handleOrder={handleOrder}
                orderSummary={orderSummary}
                handleOpen={handleOpen}
              />
            ))}
          </SC.CommonList>
        </SC.CommonCon>
      ) : (
        <SC.CommonList>
          {order.map(({ name, options, id }) => (
            <OrderItem
              key={id}
              id={id}
              name={name}
              options={options}
              handleOrder={handleOrder}
              orderSummary={orderSummary}
              handleOpen={handleOpen}
            />
          ))}
        </SC.CommonList>
      )}
    </>
  );
};

export default Order;
