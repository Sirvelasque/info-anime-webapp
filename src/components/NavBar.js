import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => (
  <header>
    <h1>UpDanime</h1>
    <NavLink to="/">
      <i className="fa-solid fa-arrow-left" />
    </NavLink>
  </header>
);

export default NavBar;
