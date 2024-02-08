export default function OneClass({ courses, coursesId }) {
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
          <label htmlFor="status_semester1_class1">
            Status
            <select
              defaultValue=""
              id="status_semester1_class1"
              name="status_semester1_class1"
              required
              aria-required="true"
            >
              <option defaultValue="" disabled>
                Choose One...
              </option>
              <option defaultValue="inProgress">In Progress</option>
              <option defaultValue="upcoming">Upcoming</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}
