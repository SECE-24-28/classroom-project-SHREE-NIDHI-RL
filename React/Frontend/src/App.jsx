import Navbar from './components/FunctionalComponent/Navbar.jsx'
import "./css/App.css";
import ClassComponent from './components/ClassComponent/ClassComponent.jsx';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Contact from "./pages/Contact";
function App() {
  const h1Style={
      backgroundColor:"purple",
      textAlign:"center",
      color:"white"
  }
  return (
    <header>
      <Navbar />
        <div>
          <h1 style={h1Style}>Welcome to Derry</h1>
          <h2 className="h2">This is a simple react</h2>
          <ClassComponent />
          <img src="vite.svg" alt="" style={{marginLeft:"550px",height:"200px"}} />
        </div>
    </header>
  );
}

export default App
