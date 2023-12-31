import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouterModel";
import { DonationsPage } from "../features/donations/pages/DonationsPage";
import RequestsPage from "../features/requests/pages/RequestsPage";
import LoginPage from "../features/users/login/LoginPage";
import { SignupPage } from "../features/users/signup/SignupPage";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.donations} element={<DonationsPage/>}/>
            <Route path={ROUTES.requests} element={<RequestsPage/>}/>
            <Route path={ROUTES.signup} element={<SignupPage/>}/>
            <Route path={ROUTES.login} element={<LoginPage/>}/>
        </Routes>
    )
}

export default Router;