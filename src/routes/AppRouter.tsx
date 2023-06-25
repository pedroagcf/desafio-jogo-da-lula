import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
const GamePage = React.lazy(() => import("pages/GamePage/GamePage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/match" element={<GamePage />} />
    </Routes>
  );
};

export default AppRouter;
