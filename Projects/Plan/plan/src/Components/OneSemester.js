import Classes from "./Classes";
import SemesterInfo from "./SemesterInfo";

export default function OneSemester({
  id,
  deleteSemester,
  classes,
  classesId,
}) {
  return (
    <fieldset className="semester">
      <SemesterInfo />
      <Classes deleteSemester={deleteSemester} id={id} />
    </fieldset>
  );
}
