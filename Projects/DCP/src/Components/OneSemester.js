import Classes from "./Classes";
import SemesterInfo from "./SemesterInfo";

export default function OneSemester({
  semesters,
  semester,
  semesterId,
  deleteSemester,
}) {
  return (
    <fieldset key={semesterId} className="semester">
      <SemesterInfo {...semester} semesterId={semesterId} />
      <Classes
        deleteSemester={deleteSemester}
        {...semester}
        semesterId={semesterId}
        semesters={semesters}
      />
    </fieldset>
  );
}
