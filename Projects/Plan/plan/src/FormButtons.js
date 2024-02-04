import React, { useState } from "react";

function FormButtons() {
  const [input, setInput] = useState("");

  const semesterClick = (e) => {
    e.preventDefault();
    console.log("Add a semester");
  };
  const submitClick = (e) => {
    e.preventDefault();
    console.log("Submit the form");
  };
  return (
    <section className="bottomButtons">
      <button onClick={semesterClick} className="bottomButton" id="addSemester">
        Add Semester
      </button>
      <button onClick={submitClick} className="bottomButton" id="submit">
        Submit
      </button>
    </section>
  );
}
export default FormButtons;
