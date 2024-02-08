import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function OneClass({ id, deleteCourse }) {
  return (
    <section>
      <div>
        <div className="oneClass">
          <label htmlFor="className_semester1_class1">
            Class Name:
            <input
              type="text"
              id="className_semester1_class1"
              name="className_semester1_class1"
              placeholder="ENGL 102"
              required
              aria-required="false"
            />
          </label>
          <label htmlFor="credits_semester1_class1">
            Credits
            <input
              type="text"
              id="credits_semester1_class1"
              name="credits_semester1_class1"
              placeholder="3"
              required
              aria-required="false"
            />
          </label>
          <button onClick={() => deleteCourse(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </section>
  );
}
