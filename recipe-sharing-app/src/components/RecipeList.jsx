import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);
  const recipes = useRecipeStore((s) => s.recipes);
  const searchTerm = useRecipeStore((s) => s.searchTerm);

  const listToShow =
    (filteredRecipes.length > 0 || searchTerm.trim() !== '')
      ? filteredRecipes
      : recipes;

  if (!listToShow || listToShow.length === 0) {
    return <div>No recipes found.</div>;
  }

  return (
    <div>
      {listToShow.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '12px',
            marginBottom: '14px',
            borderRadius: '6px'
          }}
        >
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>

          <Link to={`/recipes/${recipe.id}`} style={{ marginRight: '12px' }}>
            View
          </Link>

          <Link to={`/recipes/${recipe.id}/edit`}>
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
