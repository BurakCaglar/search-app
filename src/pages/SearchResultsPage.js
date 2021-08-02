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
      <section>
        <div className="search-results">
          <SearchResults />
        </div>
      </section>
    </main>
  );
};

export default SearchResultsPage;
