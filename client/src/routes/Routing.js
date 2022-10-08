import { Route, Routes } from "react-router-dom";
import RouteNames from "./RoutesNames";
import { AddNewItems, GetAlltems, Home, CheckoutItems } from "../pages/index";

function Routing() {
  return (
    <Routes>
      <Route path={RouteNames.root.route} element={<Home />} />
      <Route path={RouteNames.Home.route} element={<Home />} />
      <Route path={RouteNames.GetAlltems.route} element={<GetAlltems />} />
      <Route path={RouteNames.AddNewItems.route} element={<AddNewItems />} />
      <Route
        path={RouteNames.CheckoutItems.route}
        element={<CheckoutItems />}
      />

      <Route
        path={RouteNames.NotFound.route}
        element={<h1>Page Not Found !404</h1>}
      />
    </Routes>
  );
}

export default Routing;
