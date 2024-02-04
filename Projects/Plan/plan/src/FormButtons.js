const FormButtons = () => {
  const semesterClick = () => {
    console.log("Add a semester");
  };
  const submitClick = () => {
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
};
export default FormButtons;
