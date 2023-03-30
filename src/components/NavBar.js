import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className = 'nav'>
      <NavLink to='/home'>
        <div className = "nav-choice">Home</div>
      </NavLink>
      <NavLink to='/catfact/:'>
        <div className = "nav-choice">Cat Fact</div>
      </NavLink>
      <NavLink to = '/adoption'>
      <div className = "nav-choice">Adoption</div>
      </NavLink>
    </nav>
  );
}

export default NavBar;

