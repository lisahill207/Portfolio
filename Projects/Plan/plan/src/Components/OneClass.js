import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function OneClass({ deleteCourse, courseId }) {
  return (
    <section>
      <div>
        <div className="oneClass">
          <label htmlFor="className">
            Class Name:
            <input
              type="text"
              name="className"
              placeholder="ENGL 102"
              aria-required="false"
            />
          </label>
          <label htmlFor="credits_semester1_class1">
            Credits
            <input
              type="text"
              name="credits_semester1_class1"
              placeholder="3"
              aria-required="false"
            />
          </label>
        </div>
      </div>
      <button onClick={() => deleteCourse(courseId)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </section>
  );
}
