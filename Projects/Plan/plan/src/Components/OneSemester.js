import Classes from "./Classes";
import SemesterInfo from "./SemesterInfo";

export default function OneSemester({ id, deleteSemester }) {
  return (
    <fieldset className="semester">
      <SemesterInfo />
      <Classes deleteSemester={deleteSemester} id={id} />
    </fieldset>
  );
}
