import FormTop from "./FormTop.js";
import FormBottom from "./FormBottom.js";
import FormButtons from "./FormButtons.js";
import { useState } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import OneSemester from "./OneSemester.js";

function Form() {
  const [semesters, setSemesters] = useState([<OneSemester />]);

  function addSemester() {
    setSemesters((currentSemesters) => {
      return [...currentSemesters, { id: crypto.randomUUID() }];
    });
  }

  function generatePdf() {
    let formElement = document.getElementById("pdfForm");
    html2pdf().from(formElement).save();
  }
  return (
    <>
      <form id="pdfForm">
        <FormTop />
        <FormBottom semesters={semesters} semestersId={semesters.id} />
      </form>
      <FormButtons generatePdf={generatePdf} addSemester={addSemester} />
    </>
  );
}

export default Form;
