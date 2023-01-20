import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttpClient from "../Hooks/use-http-client";
const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([])

  const { data, error } = useHttpClient({
    url: `http://localhost:3010/courses/${id}`,
  });

  useEffect(() => {
    if (data) {
      setCourse(data);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

return(
  <section className="list-section">
    <h2 className="list-heading">Kursdetaljer</h2>
    <about className="details-about">
   <h3 className="about-heading">{course.courseTitle}</h3>
   <p>
    <span className="title">Kursnummer:</span> {course.courseNumber}
    <br></br>
    <span className="title">Kurslängd:</span> {course.courseLength}
    <br></br>
    <span className="title">Kursstart:</span> {course.courseStartDate}
    <br></br>
    <span className="title">Kursbeskrivning:</span> {course.courseDescription}
    </p>
   </about>
  </section>
)
}

export default CourseDetails;