import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";

// Import your new Search Component
import Search from "./components/Search";

function Home() {
  return (
    <div>
      <h1>Welcome to the Recipe App</h1>

      {/* Link to GitHub Search Page */}
      <p>Navigate to /search to use the GitHub User Search feature.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Recipe Route */}
        <Route path="/recipes" element={<RecipeList />} />

        {/* GitHub Search Route */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
