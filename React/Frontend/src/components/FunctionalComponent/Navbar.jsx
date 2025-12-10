import "../../css/NavBar.css";
function Navbar(){
   return(
    <>
        <nav className="navbar"> 
            <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signin">Signin</Link></li>
          <li><Link to="/contact">Contact</Link></li>

            </ul>
        </nav>
        <p>The above content is NavBar</p>
    </>
   )
}
export default Navbar;