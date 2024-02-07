import Classes from "./Classes";

function SemesterInfo({ semesters, semestersId }) {
  return (
    <section key={semestersId}>
      <div className="semesterInfo">
        <label htmlFor="semester_semester1">
          Semester
          <input
            type="text"
            id="className_semester1_class1"
            name="className_semester1_class1"
            placeholder="Spring, Summer, or Fall"
            required
            aria-required="false"
          />
        </label>
        <label htmlFor="year_semester1">
          Year
          <input
            type="text"
            id="className_semester1_class1"
            name="className_semester1_class1"
            placeholder="2024"
            required
            aria-required="false"
          />
        </label>
      </div>
    </section>
  );
}

function OneSemester({ semesters, semestersId, classes, classesId }) {
  return (
    <fieldset className="semester">
      <SemesterInfo semesters={semesters} semesterId={semesters.id} />
      <Classes />
    </fieldset>
  );
}
export default OneSemester;
