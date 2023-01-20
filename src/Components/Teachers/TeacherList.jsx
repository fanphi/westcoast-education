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
  let onSaveTeacherHandler = context.onSaveTeacherHandler;

  return (
    <>
      {showModal && (
        <Modal title="Lägg till en lärare" onClick={toggleAddCourseHandler}>
          <AddTeacher onSave={onSaveTeacherHandler} />
        </Modal>
      )}
      <section data-testid="teacher-list-component" className="list-section">
        <button onClick={toggleAddCourseHandler} className="add-btn">
          Lägg till en lärare
        </button>

        <h2 className="list-heading">Lärarlista</h2>

        <ul className="list-ul">
          {teacher.map((teacher) => (
            <li key={teacher.id} className="listitem">
              <Link
                to={`/teacher/${teacher?.id}`}
                key={teacher.id}
                className="list-link"
              >
                {teacher.firstName} {teacher.lastName}
              </Link>
              <br></br>
              <span className="title">Personummer:</span> {teacher.socialSecurityNumber}
              <br></br>
              <span className="title">Epost:</span> {teacher.email}
              <br></br>
              <span className="title">Mobilnummer:</span> {teacher.phoneNumber}
              <br></br>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default TeacherList;
