import React from "react";
import { Link } from "react-router-dom";

const ShowButton = ({ sampleResults, showMoreOrLess }) => {
  return (
    <Link className="searchbar__show-button" onClick={showMoreOrLess}>
      {sampleResults.expanded ? (
        <span>Show less...</span>
      ) : (
        <span>Show more...</span>
      )}
    </Link>
  );
};

export default ShowButton;
