import { useContext, useEffect, useState } from "react";
import AuthContext from "../Store/auth-context";
import { Link } from "react-router-dom";
import AddCourse from "./AddCourse";
import Modal from "../UI/Modal";
const CourseList = () => {
  const context = useContext(AuthContext);
  //  let course = context.courses
  const [course, setCourse] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = () => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourse(data));
  };

  const showAddCourseHandler = () => {
    if(!showModal){
    setShowModal(true);
    }
    else{
      setShowModal(false)
    }
  };

  const onSaveHandler = async (course) => {
    console.log(course);

    const result = await fetch("http://localhost:3010/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    if (result.status === 201) {
      loadCourses();
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <Modal title="Lägg till en kurs" onClick={showAddCourseHandler}>
          <AddCourse onSave={onSaveHandler} />
        </Modal>
      )}
      <section data-testid="course-list-component">
        <h1>Kurslista</h1>
        <button onClick={showAddCourseHandler}>Lägg till en kurs</button>
        <ul>
          {course.map((course) => (
            <li key={course.courseNumber}>
              <Link to={`/course/${course?.id}`} key={course.courseNumber}>
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
