//import "../../css/NavBar.css";
import { Link } from "react-router-dom";
import Props from "./Props.jsx";
import Task from "./Task.jsx";
import State from "./State.jsx";
import Home from "./Home.jsx";
import Events from "./Event.jsx";
function Navbar(){
   return(
    <>
        <nav className="navbar"> 
            <ul>
          <Link to="/"><li><Home /></li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/LearningReact"><li>Learning React</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
            </ul>
          
        </nav>
        
    </>
   )
}
export default Navbar;
