import { useContext, useEffect, useState } from "react";
import AuthContext from "../Store/auth-context";
const CourseList = () => {
  const context = useContext(AuthContext)
//  let course = context.courses
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <section data-testid="course-list-component">
      <h1>Kurslista</h1>
      <ul>
        {course.map((course) => (
          <li key={course.courseNumber}>
            {course.courseTitle}
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
  );
};

export default CourseList;
