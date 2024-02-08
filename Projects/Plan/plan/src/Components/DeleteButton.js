export default function DeleteButton({ id, deleteSemester }) {
  return (
    <button
      onClick={() => deleteSemester(id)}
      className="bottomButton"
      id="deleteSemester"
    >
      Delete Semester
    </button>
  );
}
