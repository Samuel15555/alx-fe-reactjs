import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>My Favorites</h2>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.map((recipe) =>
        recipe ? (
          <div key={recipe.id} style={{ marginBottom: '12px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FavoritesList;
