import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
 courses: []
});

export const AuthContextProvider = (props) => {
  const [courses, setCourses] = useState([]);
  
  // const [userName, setUserName] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  // useEffect(() => {
  //   const userloggedIn = localStorage.getItem('isLoggedIn');

  //   if (userloggedIn === '1') {
  //     setIsLoggedIn(true);
  //     setUserName(localStorage.getItem('userName'));
  //   }
  // }, []);

  // const onLogoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('isLoggedIn');
  //   localStorage.removeItem('userName');
  // };

  // const onLoginHandler = (user) => {
  //   setIsLoggedIn(true);
  //   setUserName(user.userName);
  //   localStorage.setItem('isLoggedIn', 1);
  //   localStorage.setItem('userName', user.userName);
  // };

  return (
    <AuthContext.Provider
      value={{
       courses
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;