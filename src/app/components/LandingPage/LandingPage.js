import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';

const LandingPage = ({ handleChangeSeason, handleChangeDietary, handleChangeMeal, handleChangeSweet, results }) => {
  return (
    <>
        <Sidebar
          handleChangeSeason={handleChangeSeason}
          handleChangeDietary={handleChangeDietary}
          handleChangeMeal={handleChangeMeal}
          handleChangeSweet={handleChangeSweet}
        />
        <Products results={results} />
    </>
  );
}

export default LandingPage;
