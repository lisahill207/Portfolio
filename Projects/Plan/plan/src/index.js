import React from "react";
import ReactDOM from "react-dom/client";

import "./plan.css";

import PlanHeaders from "./PlanHeaders.js";
import FormTop from "./FormTop.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Plan = () => {
  return (
    <section>
      <PlanHeaders />
      <FormTop />
    </section>
  );
};

root.render(<Plan />);
