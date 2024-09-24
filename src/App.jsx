import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import JoinUs from './components/JoinUs';
import Courses from './components/Courses';
import FindCenters from './components/FindCenters';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <JoinUs />
      <Courses />
      <FindCenters />
      <Footer />
    </>
  );
};

export default App;
