import OneSemester from "./OneSemester.js";

function FormBottom({ semesters, semesterId, classes, classesId }) {
  return (
    <fieldset className="allSemesters">
      {semesters.map((semester) => {
        return <OneSemester semesters={semesters} semestersId={semesters.id} />;
      })}
    </fieldset>
  );
}
export default FormBottom;
