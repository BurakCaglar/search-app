import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useSearchContext } from "../../contexts/useSearchContext";
import { countryBaseAPI } from "../../constants/API";
import { Map } from "../index";
import UserDetail from "./UserDetail";
import CountryDetail from "./CountryDetail";
import CityDetail from "./CityDetail";

const SearchDetail = () => {
  const [detailInfo, setDetailInfo] = useState({
    country: {},
    city: {},
    cityPhotos: {},
    user: {},
  });

  const { state } = useSearchContext();
  const { name } = useParams();
  const item =
    state.samplesData.find((item) => item.name === name) ||
    state.data.find((item) => item.name === name);
  const { name: nameSurname, city, date, country, email } = item;

  const getCountryInformation = async () => {
    const response = await axios.get(`${countryBaseAPI}${country}`);
    const data = await response.data[0];
    setDetailInfo((prevState) => {
      return {
        ...prevState,
        country: data,
      };
    });
  };
  useEffect(() => {
    getCountryInformation(country);
    getCityDetail(city);
    getCityPhotos(city);
    getUserPhoto(nameSurname);
  }, [item]);
  const setComma = (array) => {
    return array.slice(0, -1).join(", ");
  };

  const getUserPhoto = async (name) => {
    const options = {
      method: "GET",
      url: "https://bing-image-search1.p.rapidapi.com/images/search",
      params: { q: `${name} person` },
      headers: {
        "x-rapidapi-key": "525ddc8a67mshcb4be879ba60b2ep1b0483jsnd2cbab8f2a14",
        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDetailInfo((prevState) => {
          return { ...prevState, user: response.data.value };
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getCityDetail = async (cityName) => {
    const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: { namePrefix: `${cityName}` },
      headers: {
        "x-rapidapi-key": "525ddc8a67mshcb4be879ba60b2ep1b0483jsnd2cbab8f2a14",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDetailInfo((prevState) => {
          return { ...prevState, city: response.data.data[0] };
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getCityPhotos = async (cityName) => {
    const options = {
      method: "GET",
      url: "https://bing-image-search1.p.rapidapi.com/images/search",
      params: { q: `${cityName} city photos` },
      headers: {
        "x-rapidapi-key": "525ddc8a67mshcb4be879ba60b2ep1b0483jsnd2cbab8f2a14",
        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDetailInfo((prevState) => {
          return { ...prevState, cityPhotos: response.data.value };
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <section ng-app="people">
        <div ng-controller="firstController">
          <div className="page">
            <div className="margins">
              <Link to="/">
                <p
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  Go Home
                </p>
              </Link>
              <UserDetail
                item={detailInfo.user.length > 0 && detailInfo.user}
                name={nameSurname}
              />

              <CountryDetail
                country={detailInfo.country}
                countryName={country}
                setComma={setComma}
              />

              <hr />
              <CityDetail cityDetail={detailInfo.city} city={city} />
              <hr />
              <h2 className="center">{city}'s Photos</h2>
              {detailInfo.cityPhotos.length > 1 &&
                detailInfo.cityPhotos
                  .slice(0, 4)
                  .map((photo, index) => (
                    <img
                      loading="lazy"
                      key={index}
                      src={photo.contentUrl}
                      alt=""
                    />
                  ))}

              <h2>Where is the {city}?</h2>
              <Map
                lat={detailInfo.city.latitude}
                lon={detailInfo.city.longitude}
                city={city}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchDetail;
