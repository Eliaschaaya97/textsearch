import React, { useState } from "react";
import "./App.css";

// Sample data - array of articles
const articles = [
  {
    title: "Introduction to Text Search",
    content: "Text search is a powerful feature in modern applications.",
  },
  {
    title: "React Application",
    content: "This is a sample React application for text search.",
  },
  {
    title: "Search Functionality",
    content: "Implementing search functionality in React is straightforward.",
  },
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

 const handleSearch = () => {
  if (!searchText) {
    setSearchResults([]);
    return;
  }

  const results = articles.filter((article) =>
    article.content.toLowerCase().includes(searchText.toLowerCase())
  );

  setSearchResults(results);
};


  return (
    <div className="App">
      <h1>Text Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="results">
        {searchResults.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>
              {result.content.split(searchText).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i !== arr.length - 1 && (
                    <span className="highlight">{searchText}</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
