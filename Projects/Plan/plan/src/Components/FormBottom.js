import OneSemester from "./OneSemester.js";

export default function FormBottom({ deleteSemester, semesters }) {
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
