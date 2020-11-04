import React from 'react';
import Layout from './src/components/Layout';
import 'normalize.css';

const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export { wrapPageElement };
