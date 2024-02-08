import React from "react";
import ReactDOM from "react-dom/client";

import "./plan.css";

import PlanHeaders from "./Components/PlanHeaders.js";
import Form from "./Components/Form.js";
import Footer from "./Components/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function DCP() {
  return (
    <section>
      <PlanHeaders />
      <Form />
      <Footer />
    </section>
  );
}

root.render(<DCP />);
