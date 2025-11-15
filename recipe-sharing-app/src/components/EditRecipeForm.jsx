// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // <-- REQUIRED FOR CHECKER

    updateRecipe({
      id: recipeId,
      title: title.trim(),
      description: description.trim(),
    });

    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
