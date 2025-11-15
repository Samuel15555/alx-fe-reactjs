import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return alert('Please add a title');
    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim()
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '8px', width: '100%', boxSizing: 'border-box', marginBottom: '10px' }}
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: '8px', width: '100%', boxSizing: 'border-box', minHeight: '80px', marginBottom: '10px' }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px' }}>Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
