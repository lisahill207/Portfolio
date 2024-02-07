import OneSemester from "./OneSemester.js";

function FormBottom({ semesters }) {
  return (
    <fieldset className="allSemesters">
      {semesters.length === 0 && "No Semesters"}
      {semesters.map((semester) => {
        return <OneSemester {...semesters} />;
      })}
    </fieldset>
  );
}
export default FormBottom;
