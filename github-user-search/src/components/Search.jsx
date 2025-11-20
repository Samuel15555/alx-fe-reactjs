import React, { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchAdvancedUsers(username, location, minRepos);

      if (results.length === 0) {
        setError("Looks like we cant find the user");
      }

      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5">
      <h2 className="text-2xl font-semibold mb-4">GitHub Advanced User Search</h2>

      {/* FORM */}
      <form onSubmit={handleSearch} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* STATUS MESSAGES */}
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* RESULTS */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded flex items-center gap-4 bg-white shadow"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded"
            />

            <div>
              <p className="font-semibold">Username: {user.login}</p>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
