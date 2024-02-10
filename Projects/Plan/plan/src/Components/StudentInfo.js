function StudentInfo() {
  return (
    <div className="studentInfo">
      <label defaultValue="" htmlFor="studentName">
        Student Name
      </label>
      <input
        type="text"
        id="studentName"
        name="studentName"
        placeholder="First Last"
        aria-required="false"
      />
      <label defaultValue="" htmlFor="studentEmail">
        Student TU Email
      </label>
      <input
        type="email"
        id="studentEmail"
        name="studentEmail"
        placeholder="student@students.towson.edu"
        aria-required="false"
      />
    </div>
  );
}
export default StudentInfo;
