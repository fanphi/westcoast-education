import { useContext } from "react";
import { Link } from "react-router-dom";
import AddCourse from "./AddCourse";
import Modal from "../UI/Modal";
import ListContext from "../Store/list-context";

const CourseList = () => {
  const context = useContext(ListContext);
  let course = context.courses;
  let showModal = context.showModal;
  let toggleAddCourseHandler = context.toggleAddHandler;
  let onSaveCourseHandler = context.onSaveCourseHandler;

  return (
    <>
      {showModal && (
        <Modal title="Lägg till en kurs" onClick={toggleAddCourseHandler}>
          <AddCourse onSave={onSaveCourseHandler} />
        </Modal>
      )}
      <section data-testid="course-list-component" className="list-section">
        <button onClick={toggleAddCourseHandler} className="add-btn">
          Lägg till en kurs
        </button>

        <h2 className="list-heading">Kurslista</h2>

        <ul className="list-ul">
          {course.map((course) => (
            <li key={course.courseNumber} className="listitem">
              <Link
                to={`/course/${course?.id}`}
                key={course.courseNumber}
                className="list-link"
              >
                {course.courseTitle}
              </Link>
              <br></br>
              <span className="title">Kursnummer:</span> {course.courseNumber}
              <br></br>
              <span className="title">Kurslängd:</span> {course.courseLength}
              <br></br>
              <span className="title">Startdatum:</span>{" "}
              {course.courseStartDate}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CourseList;
