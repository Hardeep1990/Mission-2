import React, { useState } from "react";
import axios from "axios";
import "./button1.css";

const BING_API_KEY = "...............................";

function getImageSearchResults(searchTerm, count) {
  return axios
    .get(
      `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchTerm}&count=${count}`,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": BING_API_KEY,
        },
      }
    )
    .then((response) => {
      const results = response.data.value;
      return results.map((result) => result.thumbnailUrl);
    });
}

function Button1() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [similarImages, setSimilarImages] = useState([]);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleSearchClick() {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
      .post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        getImageSearchResults(imageUrl, 10).then((results) => {
          setSimilarImages(results);
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  }

  return (
    <div>
      <h1>Find Similar Images</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button className="button1-btn" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      {similarImages.length > 0 && (
        <div>
          <h2>Similar Images:</h2>
          <ul>
            {similarImages.map((imageUrl) => (
              <li key={imageUrl}>
                <img src={imageUrl} alt="" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Button1;
