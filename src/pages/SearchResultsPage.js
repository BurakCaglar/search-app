import React from "react";
import { Logo, Sort } from "../components";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";

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
