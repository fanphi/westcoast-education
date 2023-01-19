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
  <section>
    <h1>Kursdetaljer</h1>
   {course.courseTitle}
  </section>
)
}

export default CourseDetails;