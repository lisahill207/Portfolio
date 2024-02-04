function SemesterInfo() {
  return (
    <section>
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

function OneClass() {
  return (
    <section>
      <div id="semesterOneClasses">
        <div className="oneClass">
          <label htmlFor="className_semester1_class1">
            Class Name:
            <input
              type="text"
              id="className_semester1_class1"
              name="className_semester1_class1"
              placeholder="ENGL 102"
              required
              aria-required="false"
            />
          </label>
          <label htmlFor="credits_semester1_class1">
            Credits
            <input
              type="text"
              id="credits_semester1_class1"
              name="credits_semester1_class1"
              placeholder="3"
              required
              aria-required="false"
            />
          </label>
          <label htmlFor="status_semester1_class1">
            Status
            <select
              defaultValue=""
              id="status_semester1_class1"
              name="status_semester1_class1"
              required
              aria-required="true"
            >
              <option defaultValue="" disabled>
                Choose One...
              </option>
              <option defaultValue="inProgress">In Progress</option>
              <option defaultValue="upcoming">Upcoming</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}

function ClassButton() {
  return <button id="addClass">Add Class</button>;
}

function OneSemester() {
  return (
    <fieldset className="semester" id="semester1">
      <legend>Semester 1</legend>
      <SemesterInfo />
      <OneClass />
      <ClassButton />
    </fieldset>
  );
}

function FormBottom() {
  return (
    <fieldset className="allSemesters">
      <OneSemester />
    </fieldset>
  );
}
export default FormBottom;
