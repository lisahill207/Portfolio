import OneSemester from "./OneSemester.js";

export default function FormBottom({ deleteSemester, semesters }) {


  return (
    <fieldset className="allSemesters">
      {semesters.length === 0 && "Click to add a semester"}
      {semesters.map((semester) => {
        return (
          <OneSemester
            deleteSemester={deleteSemester}
            {...semester}
            key={semester.id}
            semesters={semesters}
          />
        );
      })}
    </fieldset>
  );
}
