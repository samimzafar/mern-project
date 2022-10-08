import React from "react";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import RouteNames from "../routes/RoutesNames";
const navbar = () => {
  return (
    <Navbar fluid={true} rounded={true} className="navbar">
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Product Box
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to={RouteNames.root.route}>
          <Navbar.Link>Home</Navbar.Link>
        </NavLink>
        <NavLink to={RouteNames.GetAlltems.route}>
          <Navbar.Link>GetAlltems</Navbar.Link>
        </NavLink>
        <NavLink to={RouteNames.AddNewItems.route}>
          <Navbar.Link>AddNewItems</Navbar.Link>
        </NavLink>
        <NavLink to={RouteNames.CheckoutItems.route}>
          <Navbar.Link>CheckoutItems</Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
