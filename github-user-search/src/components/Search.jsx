import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

      // GitHub API returns an object that contains "login"
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>GitHub User Search</h2>

      <form onSubmit={fetchUserData}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div style={{ marginTop: "20px" }}>
          {/* This must contain "login" */}
          <p>Username: {userData.login}</p>

          <img
            src={userData.avatar_url}
            alt="avatar"
            width="120"
            style={{ borderRadius: "6px" }}
          />

          <p>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
