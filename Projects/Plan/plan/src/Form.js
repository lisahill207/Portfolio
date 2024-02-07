import FormTop from "./FormTop.js";
import FormBottom from "./FormBottom.js";

function Form({ semesters }) {
  return (
    <form
      action="mailto:lisahill207@gmail.com"
      method="post"
      encType="text/plain"
    >
      <FormTop />
      <FormBottom semesters={semesters} />
    </form>
  );
}

export default Form;
