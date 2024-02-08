function AdvisorInfo() {
  return (
    <div className="advisorInfo">
      <label htmlFor="advisorName">Advisor's Name</label>
      <input
        type="text"
        id="advisorName"
        name="advisorName"
        placeholder="First Last"
        required
        aria-required="true"
      />
      <label htmlFor="advisorEmail">Advisor TU Email</label>
      <input
        type="email"
        id="advisorEmail"
        name="advisorEmail"
        placeholder="advisor@towson.edu"
        required
        aria-required="true"
      />
    </div>
  );
}
export default AdvisorInfo;
