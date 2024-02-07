import React from "react";
import ReactDOM from "react-dom/client";

import "./plan.css";

import PlanHeaders from "./PlanHeaders.js";
import Form from "./Form.js";
import Footer from "./footer.js";

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
