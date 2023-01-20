import { useContext } from "react";
import ListContext from "../Store/list-context";
import { Link } from "react-router-dom";
const Start = () => {
  const context = useContext(ListContext);
  let course = context.courses;
  return (
    <section className="list-section">
      <h2 className="list-heading start-heading">
        Välkommen till WestCoast Education
      </h2>
      <p className="para">
        WestCoast Education är ett utbildningsföretag som har sin placering på
        västkusten strax norr om Göteborg. Vi har varit i utbildningsbranschen i
        snart 40 år. Vi specialiserar oss på framförallt
        systemutvecklingsutbildningar inom webb och mobila lösningar.
      </p>
      <h3 className="list-heading">Vi erbjuder för tillfället dessa kurser</h3>
      <ul className="list-ul">
        {course.map((course) => (
          <li key={course.id} className="listitem">
            <Link to={`/course/${course.id}`} className="list-link">
              {course.courseTitle}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Start;
