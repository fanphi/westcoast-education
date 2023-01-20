import { useContext } from "react";

import { Link } from "react-router-dom";
import AddCourse from "./AddCourse";
import Modal from "../UI/Modal";
import ListContext from "../Store/list-context";
import "./Courses.css";
const CourseList = () => {
  const context = useContext(ListContext);
  let course = context.courses;
  let showModal = context.showModal;
  let toggleAddCourseHandler = context.showAddCourseHandler;
  let onSaveHandler = context.onSaveHandler;

  return (
    <>
      {showModal && (
        <Modal title="Lägg till en kurs" onClick={toggleAddCourseHandler}>
          <AddCourse onSave={onSaveHandler} />
        </Modal>
      )}
      <section data-testid="course-list-component" className="course-section">
        <button onClick={toggleAddCourseHandler} className="add-course-btn">
          Lägg till en kurs
        </button>

        <h2 className="course-heading">Kurslista</h2>

        <ul className="course-ul">
          {course.map((course) => (
            <li key={course.courseNumber} className="course-list">
              <Link to={`/course/${course?.id}`} key={course.courseNumber} className="course-link">
                {course.courseTitle}
              </Link>
              <br></br>
              Kursnummer: {course.courseNumber}
              <br></br>
              Kurslängd: {course.courseLength}
              <br></br>
              Beskrivning av kursen: {course.courseDescription} <br></br>
              Startdatum: {course.courseStartDate}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CourseList;
