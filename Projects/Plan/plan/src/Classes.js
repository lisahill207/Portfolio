import { useState } from "react";
function Classes() {
  const [courses, setCourses] = useState([<OneClass />]);

  function addClass() {
    setCourses((currentCourses) => {
      return [...currentCourses, { id: crypto.randomUUID() }];
    });
  }

  function OneClass() {
    return (
      <section key={courses.id}>
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
    function classClick(e) {
      e.preventDefault();
      addClass();
    }
    return (
      <button onClick={classClick} id="addClass">
        Add Class
      </button>
    );
  }

  return (
    <>
      {courses
        .filter((item, idx) => idx < 10)
        .map((course) => {
          return <OneClass key={courses.id} />;
        })}
      <ClassButton />
    </>
  );
}
export default Classes;
