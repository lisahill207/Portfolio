import FormTop from "./FormTop.js";
import FormBottom from "./FormBottom";

const Form = () => {
  return (
    <form
      action="mailto:lisahill207@gmail.com"
      method="post"
      encType="text/plain"
    >
      <FormTop />
      <FormBottom />
    </form>
  );
};

export default Form;
