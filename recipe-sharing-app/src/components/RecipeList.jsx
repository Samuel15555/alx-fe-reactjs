import { useRecipeStore } from '../recipeStore';

function RecipeList() {
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
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
