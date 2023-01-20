import { useContext } from "react";
import ListContext from "../Store/list-context";
import { Link } from "react-router-dom";
const Start = () => {
  const context = useContext(ListContext);
  let course = context.courses;
  return(
    <section>
      <h2>Välkommen till Westcoast Education</h2>
      <h3>Vi erbjuder för tillfället dessa kurser</h3>
      <ul>
        {course.map((course)=>(
          <Link to={`/course/${course.id}`}>
          <li key={course.id}>{course.courseTitle}</li>
          </Link>
        ))}
      </ul>
    </section>
  )

}

export default Start;