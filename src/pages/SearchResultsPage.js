import React from "react";
import { Logo, SearchBar, SearchResults } from "../components";

const SearchResultsPage = () => {
  return (
    <main className="container">
      <nav className="navbar">
        <div className="navbar__logo">
          <Logo />
        </div>
        <div className="navbar__searchbar">
          <SearchBar />
        </div>
      </nav>
      <div>
        <div className="search-results">
          <SearchResults />
        </div>
      </div>
    </main>
  );
};

export default SearchResultsPage;
