import { Link } from "react-router-dom";

import './css/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      
      <div className="nav_list">
        <Link className="page_link selected" to="/">Home</Link>
        <Link className="page_link" to="/datapacks">Datapacks</Link>
        <Link className="page_link" to="/resourcepacks">Resourcepacks</Link>
        <Link className="page_link" to="/maps">Maps</Link>
        <Link className="page_link" to="/videos">Videos</Link>
      </div>

    </div>
    
  );
}

export default Navbar;
