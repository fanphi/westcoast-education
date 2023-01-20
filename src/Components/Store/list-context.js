import React, { useState, useEffect } from "react";

const ListContext = React.createContext({
  courses: [],
  onSaveHandler: () => {},
  showModal: false,
  showAddCourseHandler: () => {},
  loadCourses: () => {}
});

export const ListContextProvider = (props) => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:3010/courses")
  //     .then((response) => response.json())
  //     .then((data) => setCourses(data));
  // }, []);
  

  useEffect(() => {
    loadCourses();
    console.log(courses)
  }, []);

  const loadCourses = () => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  };

  useEffect(() => {
    loadCourses();
    console.log(courses)
  }, []);

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

  const showAddCourseHandler = () => {
    if(!showModal){
    setShowModal(true);
    }
    else{
      setShowModal(false)
    }
  };

  return (
    <ListContext.Provider
      value={{
        courses,
        showModal,
        onSaveHandler,
        showAddCourseHandler,
        loadCourses
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
