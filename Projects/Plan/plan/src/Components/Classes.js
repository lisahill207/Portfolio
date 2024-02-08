import { useState, useEffect } from "react";
import OneClass from "./OneClass.js";
import DeleteButton from "./DeleteButton.js";

export default function Classes({ deleteSemester, id }) {
  const [courses, setCourses] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [<OneClass />];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(courses));
  }, [courses]);

  function addClass() {
    setCourses((currentCourses) => {
      return [...currentCourses, { id: crypto.randomUUID() }];
    });
  }

  function deleteCourse(id) {
    setCourses((currentCourses) => {
      return currentCourses.filter((course) => course.id !== id);
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
          return (
            <OneClass deleteCourse={deleteCourse} {...course} key={course.id} />
          );
        })}
      <ClassButton />
      <DeleteButton deleteSemester={deleteSemester} id={id} />
    </>
  );
}
