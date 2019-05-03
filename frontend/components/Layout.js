import React from 'react';
import Head from './Head';
import Footer from './Footer';

const layoutStyle = {
  margin: 20,
  padding: 20,
};

const Layout = props => {
  const { children } = props;
  return (
    <div style={layoutStyle}>
      <Head />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
