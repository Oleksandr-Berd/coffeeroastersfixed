import React, { lazy } from "react";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(()=>import("./pages/HomePage/HomePage"))
const AboutUsPage = lazy(()=> import("./pages/AboutUsPage/AboutUsPage"))

const App: React.FC = () => {
  return <>
  <SharedLayout>
<Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>
</Routes>
  </SharedLayout>
  </>;
};

export default App;
