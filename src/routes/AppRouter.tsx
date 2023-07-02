import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import { lazy, Suspense } from "react";
const GamePage = lazy(() => import("pages/GamePage/GamePage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/match"
        element={
          <Suspense fallback="loading...">
            <GamePage />
          </Suspense>
        }
      />
    </Routes>
  );
};
export default AppRouter;
