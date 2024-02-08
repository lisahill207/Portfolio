function StudentInfo() {
  return (
    <div className="studentInfo">
      <label defaultValue="" htmlFor="studentName">
        Student Name
      </label>
      <input
        type="text"
        required
        id="studentName"
        name="studentName"
        placeholder="First Last"
        aria-required="true"
      />
      <label defaultValue="" htmlFor="studentEmail">
        Student TU Email
      </label>
      <input
        type="email"
        id="studentEmail"
        name="studentEmail"
        placeholder="student@students.towson.edu"
        required
        aria-required="true"
      />
    </div>
  );
}
export default StudentInfo;
