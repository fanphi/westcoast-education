import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  courses: [],
});

export const AuthContextProvider = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        courses,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
