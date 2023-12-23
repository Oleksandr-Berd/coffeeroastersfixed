import React, { lazy, useState } from "react";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const PlanPage = lazy(() => import("./pages/PlanPage/PlanPage"));

const App: React.FC = () => {
  const [isModalSummary, setIsModalSumamy] = useState<boolean>(false)
  const toggleModalSummary = ():void =>{
    setIsModalSumamy(!isModalSummary)
}

  return (
    <>
      <SharedLayout isModalSummary={isModalSummary} toggleModalSummary={toggleModalSummary}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/plan" element={<PlanPage toggleModalSummary={toggleModalSummary}/>} />
        </Routes>
      </SharedLayout>
    </>
  );
};

export default App;
