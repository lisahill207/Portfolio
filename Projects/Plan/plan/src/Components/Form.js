import FormTop from "./FormTop.js";
import FormBottom from "./FormBottom.js";
import FormButtons from "./FormButtons.js";
import { useState /*, useEffect*/ } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import OneSemester from "./OneSemester.js";

export default function Form() {
  const [semesters, setSemesters] = useState([<OneSemester />]);
  /*) => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  }*/

  /*useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(semesters));
  }, [semesters]);*/

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
