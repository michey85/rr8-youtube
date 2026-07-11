import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong>
              <NavLink to="/" className="contrast">
                Coins
              </NavLink>
            </strong>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
