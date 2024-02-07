import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

import "./plan.css";

import PlanHeaders from "./PlanHeaders.js";
import Form from "./Form.js";
import FormButtons from "./FormButtons.js";
import Footer from "./footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function DCP() {
  const [semesters, setSemesters] = useState([]);

  function addSemester() {
    setSemesters((currentSemesters) => {
      return [...currentSemesters, { id: crypto.randomUUID() }];
    });
  }
  return (
    <section>
      <PlanHeaders />
      <Form semesters={semesters} />
      <FormButtons addSemester={addSemester} />
      <Footer />
    </section>
  );
}

root.render(<DCP />);
