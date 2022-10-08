import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Recipe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {recipe, error} = useSelector(state => state.recipe);

  if (!recipe || error) {
    return null;
  }
  
  const {name, ingredients, instructions} = recipe;

  const ingredientsJsx = ingredients.map((ingredient) => {
    return <div key={ingredient._id}>
      <p>Name: {ingredient.name}</p>
      <p>Unit: {ingredient.unit}</p>
      <p>Amount: {ingredient.amount}</p>
    </div>
  });

  const link =
    location.pathname !== "/recipe" ? (
      <Link to="/recipe">Full page recipe</Link>
    ) : (
      <Link onClick={() => navigate(-1)}>Back</Link>
    );

  return (
    <>
      <nav>
        {link}
      </nav>
      <h3 id="recipe-title">Recipe: {name}</h3>
      <h3>Ingredients</h3>
      {ingredientsJsx}
      <h3>Instructions</h3>
      <p>{instructions}</p>
    </>
  )
}
