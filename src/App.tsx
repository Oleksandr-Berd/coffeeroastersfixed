import React, { lazy, useState } from "react";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { OrderQuestion, OrderSummary } from "./utils/types/types";
import { setkeyName } from "./utils/helpers";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const PlanPage = lazy(() => import("./pages/PlanPage/PlanPage"));

const App: React.FC = () => {
  const [isModalSummary, setIsModalSumamy] = useState<boolean>(false)
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    drinkWay: "_______",
    coffeeType: "_______",
    coffeeVolume: "_______",
    grindWay: "_______",
    frequency: "_______",
  });

  const handleOrder = (name: OrderQuestion, title: string): void => {
    

    setOrderSummary((prevOrderSummary) => ({
      ...prevOrderSummary,
      [setkeyName(name)]: title,
    }));
  };
  const toggleModalSummary = ():void =>{
    setIsModalSumamy(!isModalSummary)
}

  return (
    <>
      <SharedLayout isModalSummary={isModalSummary} toggleModalSummary={toggleModalSummary} orderSummary={orderSummary}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/plan" element={<PlanPage toggleModalSummary={toggleModalSummary} orderSummary={orderSummary} handleOrder={handleOrder}/>} />
        </Routes>
      </SharedLayout>
    </>
  );
};

export default App;
