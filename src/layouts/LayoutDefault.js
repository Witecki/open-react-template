import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Banner from '../components/layout/partials/Banner';

const LayoutDefault = ({ children }) => (
  <>

    <main className="site-content">
      {children}
    </main>
    <Banner />

  </>
);

export default LayoutDefault;  