function FormButtons({ addSemester }) {
  function semesterClick(e) {
    e.preventDefault();
    addSemester();
  }
  return (
    <section className="bottomButtons">
      <button onClick={semesterClick} className="bottomButton" id="addSemester">
        Add Semester
      </button>
      <button className="bottomButton" id="submit">
        Submit
      </button>
    </section>
  );
}
export default FormButtons;
