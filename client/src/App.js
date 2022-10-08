import React from "react";
import { Navbar } from "./components";
import Router from "./routes/Routing";

const App = () => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
};

export default App;
