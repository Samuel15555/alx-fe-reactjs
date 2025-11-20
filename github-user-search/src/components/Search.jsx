import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "350px", margin: "auto", textAlign: "center" }}>
      <h2>GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success State */}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt="avatar"
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h3>{userData.name || "No name provided"}</h3>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
