import React from "react";
import { Logo } from "../components";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <main className="container homepage">
      <div className="homepage__logo">
        <Logo />
      </div>
      <div className="homepage__searchbar">
        <SearchBar />
      </div>
    </main>
  );
};

export default Home;
