import { Router } from "@reach/router";
import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Quiz path="/quiz/:categoryId" />
    </Router>
  );
};

export default App;
