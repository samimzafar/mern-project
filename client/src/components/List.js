import React from "react";
import { ListGroup } from "flowbite-react";
import { NavLink } from "react-router-dom";
import RouteNames from "../routes/RoutesNames";
const List = () => {
  return (
    <div className="w-48">
      <ListGroup>
        <NavLink to={RouteNames.GetAlltems.route}>
          <ListGroup.Item className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get All Item Link
          </ListGroup.Item>
        </NavLink>
        <NavLink to={RouteNames.AddNewItems.route}>
          <ListGroup.Item>Add New Items</ListGroup.Item>
        </NavLink>
        <NavLink to={RouteNames.CheckoutItems.route}>
          <ListGroup.Item>View Checkout Items</ListGroup.Item>
        </NavLink>
      </ListGroup>
    </div>
  );
};

export default List;
