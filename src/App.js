// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

const articles = [
  {
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    content:
      "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to d...",
  },
  {
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Feb 21, 2019",
    content:
      "A practical example of using CSS Grid Layout to recreate the GitHub contribution graph. This post shows how to leverage CSS Grid's auto-placement capabilities along with color styling to achieve a visual representation of user activity.",
  },
  {
    title: "Mastering Flexbox: A Complete Guide to CSS Flexible Box Layout",
    date: "May 14, 2020",
    content:
      "Flexbox has revolutionized how we build responsive web layouts. This comprehensive guide covers everything from the main axis and cross axis to flex-grow, flex-shrink, and flex-basis properties.",
  },
  {
    title: "How to Improve Web Accessibility for Better UX",
    date: "Jul 10, 2021",
    content:
      "Web accessibility ensures that websites are usable by everyone, including those with disabilities. This article explores techniques and best practices to make your web projects more inclusive.",
  },
  {
    title: "CSS Grid vs Flexbox: When and How to Use Each Layout Module",
    date: "Nov 05, 2022",
    content:
      "Choosing between CSS Grid and Flexbox can be tricky. This article explains the strengths and ideal use-cases for each layout model to help you decide which fits your project requirements.",
  },
  {
    title: "JavaScript ES2021 Features You Should Know",
    date: "Jan 15, 2021",
    content:
      "Stay up-to-date with the latest JavaScript features introduced in ES2021, including logical assignment operators, numeric separators, and Promise.any.",
  },
  {
    title: "React Hooks Deep Dive",
    date: "Mar 08, 2020",
    content:
      "Explore React Hooks in detail: how to useState, useEffect, useContext and custom hooks to write cleaner and more efficient React components.",
  },
  {
    title: "State Management in Modern Web Apps",
    date: "Sep 22, 2021",
    content:
      "An overview of different state management approaches including Context API, Redux, MobX, and Recoil, with pros and cons for each.",
  },
  {
    title: "Building Progressive Web Apps (PWA)",
    date: "Dec 01, 2020",
    content:
      "Learn how to build reliable, fast, and engaging Progressive Web Apps with service workers, manifest files, and caching strategies.",
  },
  {
    title: "CSS Variables: Dynamic Styles with Custom Properties",
    date: "Apr 27, 2019",
    content:
      "CSS Variables provide a way to make styles more dynamic and reusable. This article dives into syntax, browser support, and practical examples.",
  },
  {
    title: "Introduction to TypeScript",
    date: "Aug 18, 2021",
    content:
      "TypeScript adds static typing to JavaScript. This guide covers the basics of types, interfaces, and how to integrate TypeScript into your React projects.",
  },
  {
    title: "Debugging JavaScript Efficiently",
    date: "Feb 14, 2019",
    content:
      "Tips and tricks for debugging JavaScript code using browser dev tools, breakpoints, and console utilities.",
  },
  {
    title: "Web Performance Optimization Techniques",
    date: "Oct 03, 2022",
    content:
      "Techniques to improve page load speed, including lazy loading, code splitting, and optimizing images.",
  },
  {
    title: "Responsive Typography Best Practices",
    date: "Jun 11, 2020",
    content:
      "How to create fluid and responsive typography that looks great on any screen size using CSS clamp and viewport units.",
  },
  {
    title: "Accessibility Testing Tools and Methods",
    date: "Jan 29, 2022",
    content:
      "A review of popular accessibility testing tools such as axe, Lighthouse, and screen readers to ensure your app meets accessibility standards.",
  },
  {
    title: "Deploying React Apps with CI/CD",
    date: "Mar 30, 2021",
    content:
      "Automate your React app deployment using continuous integration and continuous deployment pipelines with popular services like GitHub Actions and Netlify.",
  },
  {
    title: "CSS Grid: Advanced Layout Techniques",
    date: "Nov 19, 2020",
    content:
      "Go beyond the basics of CSS Grid to learn about grid areas, named lines, and responsive grid templates.",
  },
  {
    title: "Introduction to GraphQL",
    date: "May 06, 2021",
    content:
      "GraphQL offers a flexible alternative to REST APIs. Learn its core concepts, schema definition, and querying techniques.",
  },
  {
    title: "Modern JavaScript Async Patterns",
    date: "Aug 22, 2020",
    content:
      "Understand async/await, Promises, and generators to write more readable asynchronous JavaScript code.",
  },
  {
    title: "Building Reusable Components in React",
    date: "Sep 15, 2022",
    content:
      "Best practices for designing and implementing reusable React components to improve maintainability and scalability.",
  },
];
const popularSearches = [
  "CSS Grid",
  "React Hooks",
  "JavaScript",
  "Flexbox",
  "Accessibility",
  "TypeScript",
  "Performance",
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchText) {
      setSearchResults([]);
      return;
    }
    const lowerSearch = searchText.toLowerCase();
    const results = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerSearch) ||
        article.content.toLowerCase().includes(lowerSearch)
    );
    setSearchResults(results);
  }, [searchText]);

  function highlightText(text) {
    if (!searchText) return text;
    const regex = new RegExp(`(${searchText})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <mark key={i} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }

  return (
    <div className="container">
      {/* Left sidebar */}
      <aside className="popular-searches" aria-label="Popular Searches">
        <h3>Most Searched</h3>
        <ul>
          {popularSearches.map((term, i) => (
            <li
              key={i}
              onClick={() => setSearchText(term)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSearchText(term);
                }
              }}
            >
              {term}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main search content */}
      <main className="search-main">
        <h1 className="heading">Search</h1>
        <div className="search-wrapper">
          <input
            className="search-input"
            placeholder="Type to search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            aria-label="Search articles"
          />
          {searchText && (
            <button
              className="clear-button"
              onClick={() => setSearchText("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {searchText && (
          <p className="posts-found">
            {searchResults.length} posts were found.
          </p>
        )}

        <div className="results">
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div
                key={index}
                className="result-card"
                tabIndex={0}
                role="article"
                aria-label={`Article titled ${result.title}`}
              >
                <h2 className="result-title">{highlightText(result.title)}</h2>
                <p className="result-date">{result.date}</p>
                <p className="result-content">
                  {highlightText(result.content)}
                </p>
              </div>
            ))
          ) : searchText ? (
            <p className="no-results">No results found for "{searchText}"</p>
          ) : (
            <p className="start-search">Start typing to search...</p>
          )}
        </div>
      </main>
    </div>
  );

  
}

export default App;