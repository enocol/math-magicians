import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navbar-container">
      <nav className="navbar">
        <div>
          <span className="logo">Math Magicians</span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="border">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
);
export default Navbar;
