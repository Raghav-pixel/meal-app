"use client";

import LandingPage from './components/LandingPage/LandingPage';
import { CartState } from './app/Context/Context';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import axios from 'axios';
import Nav from './components/NavigationBar/NavBar'

export default function Home() {

  const { state: { meals, cart } } = CartState();
  const [ query, setQuery ] = useState("");
  const [ seasonType, setSeasonType ] = useState(null);
  const [ dietaryType, setDietaryType ] = useState(null);
  const [ mealType, setMealType ] = useState(null);
  const [ sweetType, setSweetType ] = useState(null);
  const [ categoryData, setCategoryData ] = useState([]);

  // On clicking radio button
  // const handleChange = (e) => {
  //   setType(e.target.value);
  // }

  const handleChangeSeason = (e) => {
    setSeasonType(e.target.value);
  }

  const handleChangeDietary = (e) => {
    setDietaryType(e.target.value);
  }

  const handleChangeSweet = (e) => {
    setSweetType(e.target.value);
  }

  const handleChangeMeal = (e) => {
    setMealType(e.target.value);
  }
  
  useEffect(() => {
    const fetchData = async() => {
      try {

        let seasonResponse = [];
        let dietaryResponse = [];
        let mealResponse = [];
        let sweetResponse = [];
        let finalResult = [];
        if(!seasonType && !dietaryType && !mealType && !sweetType) {
          finalResult = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=64f62f7b598341dfb2b5edefec0816b9`))?.data.results;
        }
        if(seasonType) {
          seasonResponse = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=${seasonType}&query=${query}&apiKey=64f62f7b598341dfb2b5edefec0816b9`))?.data.results;
          finalResult.push(...seasonResponse);
        }
        if(dietaryType) {
          dietaryResponse = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=${dietaryType}&query=${query}&apiKey=64f62f7b598341dfb2b5edefec0816b9`))?.data.results;
          finalResult.push(...dietaryResponse);

        }
        if(mealType) {
          mealResponse = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&query=${query}&apiKey=64f62f7b598341dfb2b5edefec0816b9`))?.data.results;
          finalResult.push(...mealResponse);

        }
        if(sweetType) {
          sweetResponse = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=${sweetType}&query=${query}&apiKey=64f62f7b598341dfb2b5edefec0816b9`))?.data.results;
          finalResult.push(...sweetResponse);

        }

        // Create sets from arrays
        const set1 = new Set(seasonResponse.map((obj) => obj.id));
        const set2 = new Set(dietaryResponse.map((obj) => obj.id));
        const set3 = new Set(mealResponse.map((obj) => obj.id));
        const set4 = new Set(sweetResponse.map((obj) => obj.id));

        // Find common values using set intersection
        const intersection = [...set1].filter((id) =>
        set2.has(id) || set3.has(id) || set4.has(id)
        );

        // Extract common objects from original arrays
        const commonObjects = seasonResponse
        .concat(dietaryResponse, mealResponse, sweetResponse)
        .filter((obj) => intersection.includes(obj.id));

        console.log(commonObjects, '[commonObjects]');
        console.log(finalResult, '[finalResult]');
        setCategoryData((commonObjects.length>0 ? commonObjects : finalResult));
      } catch(error) {
        console.log(error);
      }
    }
    
    fetchData();

  }, [seasonType, mealType, sweetType, dietaryType, query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  // filter products on searching item
  const filteredItems = categoryData.filter((p) => 
    p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );



  function filteredData(categoryData, query) {
    let filteredProducts = categoryData;

    if(query) {
      filteredProducts = filteredItems;
    }

    return filteredProducts.map(({ id, image, title }) => (
      <Card 
        key={id}
        img={image}
        title={title}
      />
    ));
  }

  const results = filteredData(categoryData, query);

  return (
    <main style={{ marginTop: '160px', display: 'flex', justifyContent: 'space-between' }}>
      <>
        <Nav query={query} handleInputChange={handleInputChange} />
        <LandingPage
          handleChangeSeason={handleChangeSeason}
          handleChangeDietary={handleChangeDietary}
          handleChangeMeal={handleChangeMeal}
          handleChangeSweet={handleChangeSweet}
          results={results}
        />
      </>
    </main>
  )
}