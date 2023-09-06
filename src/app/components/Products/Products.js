import React from 'react';
import './Products.css';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';
import data from '../../data';
import Card from '../../components/Card/Card';

const Products = () => {

    const results = data.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card 
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ));
  
  return (
    <>
      <section className='card-container'>
        {results}
      </section>
    </>
  );
}

export default Products;