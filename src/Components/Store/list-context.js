import React, { useState, useEffect } from "react";

const ListContext = React.createContext({
  courses: [],
  teachers: [],
  showModal: false,
  onSaveCourseHandler: () => {},
  showAddCourseHandler: () => {},
  loadCourses: () => {},
  onSaveTeacherHandler: () => {},
});

export const ListContextProvider = (props) => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadCourses();
    loadTeachers();
  }, []);

  const loadCourses = () => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  };
  const loadTeachers = () => {
    fetch("http://localhost:3010/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  };

  const onSaveCourseHandler = async (course) => {
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

  const onSaveTeacherHandler = async (teacher) => {
    const result = await fetch("http://localhost:3010/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher),
    });

    if (result.status === 201) {
      loadTeachers();
      setShowModal(false);
    }
  };

  

  const showAddCourseHandler = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <ListContext.Provider
      value={{
        courses,
        teachers,
        showModal,
        onSaveCourseHandler,
        onSaveTeacherHandler,
        showAddCourseHandler,
        loadCourses,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
