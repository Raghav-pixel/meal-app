"use client";

import LandingPage from './components/LandingPage/LandingPage';
import { CartState } from './app/Context/Context';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import axios from 'axios';
import Nav from './components/NavigationBar/NavBar'

export default function Home() {

  const { state: { meals, cart } } = CartState();
  const [ selectedCategory, setSelectedCategory ] = useState(null);
  const [ query, setQuery ] = useState("");
  const [ type, setType ] = useState(null);
  const [ categoryData, setCategoryData ] = useState([]);

  // On clicking radio button
  const handleChange = (e) => {
    setType(e.target.value);
  }
  
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=${type}&query=${query}&apiKey=64f62f7b598341dfb2b5edefec0816b9`)
      .then((data) => {
        setCategoryData(data.data.results);
      })
  }, [type, query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  // filter products on searching item
  const filteredItems = categoryData.filter((p) => 
    p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );



  function filteredData(categoryData, selected, query) {
    let filteredProducts = categoryData;

    // if(query) {
    //   filteredProducts = filteredItems;
    // }

    // if(selected) {
    //   filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => 
    //     category === selected || 
    //     color === selected || 
    //     company === selected || 
    //     newPrice === selected || 
    //     title === selected
    //   );
    // }
  
    return filteredProducts.map(({ id, image, title }) => (
      <Card 
        key={id}
        img={image}
        title={title}
      />
    ));
  }

  const results = filteredData(categoryData, selectedCategory, query);

  return (
    <main style={{ marginTop: '160px', display: 'flex', justifyContent: 'space-between' }}>
      <>
        <Nav query={query} handleInputChange={handleInputChange} />
        <LandingPage
          handleChange={handleChange}
          results={results}
        />
      </>
    </main>
  )
}