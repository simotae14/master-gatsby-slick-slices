import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
