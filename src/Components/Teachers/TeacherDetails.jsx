import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttpClient from "../Hooks/use-http-client";

const TeacherDetails = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState([]);

  const { data, error } = useHttpClient({
    url: `http://localhost:3010/teachers/${id}`,
  });

  useEffect(() => {
    if (data) {
      setTeacher(data);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <section className="list-section">
      <h2 className="list-heading">Lärardetaljer</h2>
      <div className="details-about">
        <h3 className="about-heading">
          {teacher.firstName} {teacher.lastName}
        </h3>
        <p>
          <span className="title">Personnummer:</span>{" "}
          {teacher.socialSecurityNumber}
          <br></br>
          <span className="title">Email:</span> {teacher.email}
          <br></br>
          <span className="title">Mobilnummer:</span> {teacher.phoneNumber}
          <br></br>
          <span className="title">Kompetensområden: </span>
          {teacher.competenceList}
        </p>
      </div>
    </section>
  );
};

export default TeacherDetails;
