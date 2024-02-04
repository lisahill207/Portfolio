const SemesterInfo = () => {
  return (
    <section>
      <div className="semesterInfo">
        <label for="semester_semester1">
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
        <label for="year_semester1">
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
};

const OneClass = () => {
  return (
    <section>
      <div id="semesterOneClasses">
        <div className="oneClass">
          <label for="className_semester1_class1">
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
          <label for="credits_semester1_class1">
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
          <label for="status_semester1_class1">
            Status
            <select
              id="status_semester1_class1"
              name="status_semester1_class1"
              required
              aria-required="true"
            >
              <option value="" disabled selected hidden>
                Choose One...
              </option>
              <option value="inProgress">In Progress</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
};
const ClassButton = () => {
  return <button id="addClass">Add Class</button>;
};

const OneSemester = () => {
  return (
    <fieldset className="semester" id="semester1">
      <legend>Semester 1</legend>
      <SemesterInfo />
      <OneClass />
      <ClassButton />
    </fieldset>
  );
};

const AllSemesters = () => {
  return (
    <fieldset className="allSemesters">
      <OneSemester />
    </fieldset>
  );
};
const BottomButtons = () => {
  return (
    <section className="bottomButtons">
      <button className="bottomButton" id="addSemester">
        Add Semester
      </button>
      <button className="bottomButton" id="submit">
        Submit
      </button>
    </section>
  );
};
const FormBottom = () => {
  return (
    <section>
      <AllSemesters />
      <BottomButtons />
    </section>
  );
};
export default FormBottom;
