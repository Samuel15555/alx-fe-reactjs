// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <div>No recipes yet. Add one!</div>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '6px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>{recipe.title}</h3>
          <p style={{ margin: 0 }}>{recipe.description}</p>
          <div style={{ marginTop: 8 }}>
            <Link to={`/recipes/${recipe.id}`} style={{ marginRight: 12 }}>View</Link>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 12 }}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
