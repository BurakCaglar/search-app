import React from "react";
import { Link } from "react-router-dom";

const SampleResult = ({ item, index }) => {
  const { name, city, date, country, email } = item;
  return (
    <Link to={`/search-results/${name}`}>
      <li
        className="searchbar__listitem searchbar__listitem--hover"
        key={index}
      >
        <div className="searchbar__leftside">
          <div className="searchbar__location">
            <p className="searchbar__location-text">
              {country} - {city}
            </p>
          </div>
          <div className="searchbar__date-and-name">
            <p className="searchbar__date-and-name-text">
              {name} - {new Date(date).getFullYear()}
            </p>
          </div>
        </div>
        <div className="searchbar__rightside">
          <div className="searchbar__email">
            <p className="searchbar__email-text">Email: {email}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default SampleResult;
