import { useState } from "react";
import OneClass from "./OneClass.js";
import DeleteButton from "./DeleteButton.js";

export default function Classes({ deleteSemester, id }) {
  const [courses, setCourses] = useState([<OneClass />]);

  function addClass() {
    setCourses((currentCourses) => {
      return [...currentCourses, { id: crypto.randomUUID() }];
    });
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
          return <OneClass courses={courses} coursesId={courses.id} />;
        })}
      <ClassButton />
      <DeleteButton deleteSemester={deleteSemester} id={id} />
    </>
  );
}
