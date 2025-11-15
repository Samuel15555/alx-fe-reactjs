import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Search term user types in
  searchTerm: "",

  // Store filtered recipes separately
  filteredRecipes: [],

  // Update search term
  setSearchTerm: (term) =>
    set((state) => {
      const newFiltered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );

      return {
        searchTerm: term,
        filteredRecipes: newFiltered
      };
    }),

  // For convenience — run filtering manually (optional)
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // If you have add/edit/delete actions, ensure they update filteredRecipes too
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
