import PlanHeaders from "./PlanHeaders.js";
import Form from "./Form.js";
import Footer from "./Footer.js";

import "./form.css";
import "./Header.css";
import "./footer.css";

export default function DCP() {
  return (
    <section>
      <PlanHeaders />
      <Form />
      <Footer />
    </section>
  );
}
