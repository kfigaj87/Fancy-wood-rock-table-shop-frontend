import React from "react";
import Home from "../views/Home";
import ShoppingCart from "../views/ShoppingCart";

import { Route, Routes } from "react-router-dom";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home customer={props.customer} setCustomers={props.setCustomers} />
        }
      />
      <Route
        path="shoppingCart"
        element={
          <ShoppingCart
            customer={props.customer}
            setCustomers={props.setCustomers}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
