import './assets/Navbar.css'
import {Link} from 'react-router-dom'
var Navbar = () =>
{
  return(
    <header>
        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;