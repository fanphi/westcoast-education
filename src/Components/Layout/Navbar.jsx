import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return(
   <nav className="navbar">
    <h1>Westcoast Education</h1>
    <Link to="/courseList" className="nav-link">Kurslista</Link>
    <Link to="/teacherList" className="nav-link">Lärarlista</Link>
   </nav>
  )
}
export default Navbar