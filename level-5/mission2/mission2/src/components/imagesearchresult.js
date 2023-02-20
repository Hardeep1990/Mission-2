import React, { useState } from "react";
import Button1 from "./button1.js";

function Result() {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleError = (message) => {
    setErrorMessage(message);
  };

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Button1 onSearchResults={handleSearchResults} onError={handleError} />
      {errorMessage && <p>{errorMessage}</p>}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.thumbnailUrl}>
                <img src={result.thumbnailUrl} alt={result.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Result;
