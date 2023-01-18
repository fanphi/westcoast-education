import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./Components/Courses/CourseList";
import "./App.css";
import { AuthContextProvider } from "./Components/Store/auth-context";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <header></header>
        <main>
          <Routes>
            <Route path="/courseList" element={<CourseList />} />
            <Route path="/" element={<CourseList />} />
          </Routes>
        </main>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
