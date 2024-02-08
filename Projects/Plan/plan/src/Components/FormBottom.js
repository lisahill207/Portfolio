import OneSemester from "./OneSemester.js";
import { useId } from "react";

export default function FormBottom({
  deleteSemester,
  semesters,
  classes,
  classesId,
}) {
  return (
    <fieldset className="allSemesters">
      {semesters.map((semester) => {
        return (
          <OneSemester
            deleteSemester={deleteSemester}
            {...semester}
            key={semester.id}
          />
        );
      })}
    </fieldset>
  );
}
