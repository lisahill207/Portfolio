import React from "react";
import ReactDOM from "react-dom/client";

import "./plan.css";

import PlanHeaders from "./PlanHeaders.js";
import FormTop from "./FormTop.js";
import Footer from "./footer.js";
import FormBottom from "./FormBottom.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const DCP = () => {
  return (
    <section>
      <PlanHeaders />
      <form
        action="mailto:lisahill207@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <FormTop />
        <FormBottom />
      </form>
      <Footer />
    </section>
  );
};

root.render(<DCP />);
