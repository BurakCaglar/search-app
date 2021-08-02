import React from "react";

const CityDetail = ({ cityDetail, city }) => {
  return (
    <div>
      <h2 className="center">About The {city}</h2>
      {cityDetail.city !== undefined && (
        <div className="detail-content">
          <p className="detail-text">City: {cityDetail.city} </p>
          <p className="detail-text">Country: {cityDetail.country} </p>
          <p className="detail-text">Latitude: {cityDetail.latitude} </p>
          <p className="detail-text">Longitude: {cityDetail.longitude} </p>
          <p className="detail-text">Population: {cityDetail.population} </p>
          <p className="detail-text">Region: {cityDetail.region} </p>
        </div>
      )}
    </div>
  );
};

export default CityDetail;
