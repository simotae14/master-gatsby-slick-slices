import React from 'react';
import { Link, navigate } from 'gatsby';

const goToSlicemasters = () => {
  // 1. Wait for 2 seconds
  setTimeout(() => {
    console.log('Go to slicers');
    navigate('/slicemasters', {
      replace: true,
    });
  }, 2000);
  // 2. change the page
};

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/beers">Beers</Link>
      </li>
      <li>
        <button type="button" onClick={goToSlicemasters}>
          Click me to see slicemasters after 2 seconds
        </button>
      </li>
    </ul>
  </nav>
);

export default Nav;
