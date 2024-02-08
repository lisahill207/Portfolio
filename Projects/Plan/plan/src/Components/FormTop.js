import StudentInfo from "./StudentInfo";
import AdvisorInfo from "./AdvisorInfo";
import MajorInfo from "./MajorInfo";

export default function FormTop() {
  return (
    <div className="topInfo">
      <StudentInfo />
      <AdvisorInfo />
      <MajorInfo />
    </div>
  );
}
