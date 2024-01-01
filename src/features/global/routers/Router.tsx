import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouterModel";
import RequestsPage from "../../donations/pages/RequestsPage";
import LoginPage from "../../users/pages/LoginPage";
import { SignupPage } from "../../users/pages/SignupPage";
import DonationsPage from "../../donations/pages/DonationsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.donations} element={<DonationsPage />} />
      <Route path={ROUTES.requests} element={<RequestsPage />} />
      <Route path={ROUTES.signup} element={<SignupPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
