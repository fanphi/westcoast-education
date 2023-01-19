import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./Components/Courses/CourseList";
import CourseDetails from "./Components/Courses/CourseDetails";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";
import { AuthContextProvider } from "./Components/Store/auth-context";


function App() {
  return (
    <Router>
      <AuthContextProvider>
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path="/courseList" element={<CourseList />} />
            <Route path="/" element={<CourseList />} />
            <Route path="course/:id" element={<CourseDetails/>}/>
          </Routes>
        </main>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
