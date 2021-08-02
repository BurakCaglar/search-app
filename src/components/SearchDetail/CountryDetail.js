import React from "react";

const CountryDetail = ({ country, countryName, setComma }) => {
  return (
    <div>
      <h2 className="center">About the {countryName}</h2>

      {country.name !== undefined && (
        <div>
          <p className="detail-text">
            Alt. Spellings:
            {setComma(country.altSpellings)}
          </p>
          <p className="detail-text">
            Borders:
            {setComma(country.borders)}
          </p>
          <p className="detail-text">Capital: {country.capital}</p>
          <p className="detail-text">Demonym: {country.demonym}</p>
          <img loading="lazy" src={country.flag} alt="" />
          <p className="detail-text">
            Languages:
            {country.languages.map((item) => item.name + ", ")}
          </p>
          <p className="detail-text">Population: {country.population}</p>
          <p className="detail-text">Region: {country.region}</p>
          <p className="detail-text">Sub. Region: {country.subregion}</p>
          <p className="detail-text">Timezone: {country.timezones[0]}</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
