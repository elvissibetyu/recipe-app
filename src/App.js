import { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard"
import axios from "axios";
import db  from './firebase';
import { collection, onSnapshot } from "firebase/firestore";
import { query } from "firebase/firestore/lite";

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [recipeData, setRecipeFirestoreData] = useState([]);

  // fetching data from api

  const searchRecipes = async () => {
    setIsLoading(true);
    // const q = query(collection(db, "Recipes"))
    // const unsub = onSnapshot(q, (querySnapshot) => {
    // console.log("Data", querySnapshot.docs.map(d => d.data()));
    // });
    const url = apiUrl + searchQuery;
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = event  => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className='container'>
      
      <h2> Theee Recipe App </h2>
      
      <SearchBar
        handleSubmit={handleSubmit}
        value={searchQuery}
        onChange={event => setQuery(event.target.value)}
        isLoading={isLoading}
      />
      
      <div className="recipes">
        
        { recipes ? recipes.map(recipe => {
          return <RecipeCard
            key = {recipe.idMeal}
            recipe= {recipe}
          />
        }) : "No Recipes!" }
      
      </div>
    
    </div>
  );
}

export default App;
