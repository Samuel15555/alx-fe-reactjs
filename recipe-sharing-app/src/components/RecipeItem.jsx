import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeItem = ({ recipe }) => {
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  const isFavorite = favorites.includes(recipe.id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
    generateRecommendations(); // update recommendations whenever favorites change
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '5px' }}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={handleFavorite}>
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeItem;
