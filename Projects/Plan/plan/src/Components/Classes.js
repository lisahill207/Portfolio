import OneClass from "./OneClass.js";
import { useState } from "react";

export default function Classes({ deleteSemester, semesterId }) {
  const [courses, setCourses] = useState([<OneClass />]);
  /*) => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  }*/

  /*useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(semesters));
  }, [semesters]);*/

  function addCourse(e) {
    e.preventDefault();
    setCourses((currentCourses) => {
      return [...currentCourses, { id: crypto.randomUUID() }];
    });
  }
  function deleteCourse(courseId) {
    setCourses((currentCourses) => {
      return currentCourses.filter((course) => course.id !== courseId);
    });
  }

  return (
    <>
      {courses.length === 0 && "Click to add a class"}
      {courses.map((course) => {
        return (
          <OneClass
            {...course}
            courseId={course.id}
            key={course.id}
            deleteCourse={deleteCourse}
          />
        );
      })}
      <button onClick={addCourse} className="bottomButton">
        Add Class
      </button>
      <button
        onClick={() => deleteSemester(semesterId)}
        className="bottomButton"
      >
        Delete Semester
      </button>
    </>
  );
}
