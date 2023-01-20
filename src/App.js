import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./Components/Courses/CourseList";
import CourseDetails from "./Components/Courses/CourseDetails";
import TeacherList from "./Components/Teachers/TeacherList";
import TeacherDetails from "./Components/Teachers/TeacherDetails";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";
import { ListContextProvider } from "./Components/Store/list-context";


function App() {
  return (
    <Router>
      <ListContextProvider>
        <header className="nav-header">
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path="/courseList" element={<CourseList />} />
            <Route path="/" element={<CourseList />} />
            <Route path="course/:id" element={<CourseDetails/>}/>
            <Route path="/teacherList" element={<TeacherList />} />
            <Route path="teacher/:id" element={<TeacherDetails/>}/>
          </Routes>
        </main>
      </ListContextProvider>
    </Router>
  );
}

export default App;
