export default function SemesterInfo() {
  return (
    <section>
      <div className="semesterInfo">
        <label htmlFor="semester_semester1">
          Semester
          <input
            type="text"
            id="className_semester1_class1"
            name="className_semester1_class1"
            placeholder="Spring, Summer, or Fall"
            aria-required="false"
          />
        </label>
        <label htmlFor="year_semester1">
          Year
          <input
            type="text"
            id="className_semester1_class1"
            name="className_semester1_class1"
            placeholder="2024"
            aria-required="false"
          />
        </label>
      </div>
    </section>
  );
}
