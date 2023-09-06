import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';

const LandingPage = ({ handleChange, results }) => {
  return (
    <>
        <Sidebar handleChange={handleChange} />
        <Products results={results} />
    </>
  );
}

export default LandingPage;
