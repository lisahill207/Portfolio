import Classes from "./Classes";
import SemesterInfo from "./SemesterInfo";

export default function OneSemester({
  semesters,
  semester,
  id,
  deleteSemester,
}) {
  return (
    <fieldset className="semester">
      <SemesterInfo />
      <Classes
        deleteSemester={deleteSemester}
        {...semester}
        semesterId={id}
        semesters={semesters}
      />
    </fieldset>
  );
}
