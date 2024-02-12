import FormTop from "./FormTop.jsx";
import FormBottom from "./FormBottom.jsx";
import FormButtons from "./FormButtons.jsx";
import { useState } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.min";

export default function Form() {
  const [semesters, setSemesters] = useState([]);

  function addSemester() {
    setSemesters((currentSemesters) => {
      return [...currentSemesters, { id: crypto.randomUUID() }];
    });
  }

  function deleteSemester(semesterId) {
    setSemesters((currentSemesters) => {
      return currentSemesters.filter((semester) => semester.id !== semesterId);
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
        <FormBottom deleteSemester={deleteSemester} semesters={semesters} />
      </form>
      <FormButtons generatePdf={generatePdf} addSemester={addSemester} />
    </>
  );
}
