import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
