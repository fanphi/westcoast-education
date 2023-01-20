import { useContext } from "react";
import { Link } from "react-router-dom";
import AddTeacher from "./AddTeacher";
import Modal from "../UI/Modal";
import ListContext from "../Store/list-context";
const TeacherList = () => {
  const context = useContext(ListContext);
  let teacher = context.teachers;
  let showModal = context.showModal;
  let toggleAddCourseHandler = context.showAddCourseHandler;
  let onSaveHandler = context.onSaveTeacherHandler;

  return (
    <>
      {showModal && (
        <Modal title="Lägg till en lärare" onClick={toggleAddCourseHandler}>
          <AddTeacher onSave={onSaveHandler} />
        </Modal>
      )}
      <section data-testid="course-list-component" className="course-section">
        <button onClick={toggleAddCourseHandler} className="add-course-btn">
          Lägg till en lärare
        </button>

        <h2 className="course-heading">Lärarlista</h2>

        <ul className="course-ul">
          {teacher.map((teacher) => (
            <li key={teacher.id} className="course-list">
              <Link
                to={`/teacher/${teacher?.id}`}
                key={teacher.id}
                className="course-link"
              >
                {teacher.firstName} {teacher.lastName}
              </Link>
              <br></br>
              Epost: {teacher.email}
              <br></br>
              Kurslängd: {teacher.phoneNumber}
              <br></br>
              {/* Beskrivning av kursen: {course.courseDescription} <br></br>
              Startdatum: {course.courseStartDate} */}
            </li>
          ))}
        </ul>
      </section>
    </>
  );

}
export default TeacherList;