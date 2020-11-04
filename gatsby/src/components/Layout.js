import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
