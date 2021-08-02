import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSearchContext } from "../../contexts/useSearchContext";
import mockData from "../../assets/data/mockData.json";
import { SampleResultsList } from "../index";
import { ShowButton } from "../index";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [sampleResults, setSampleResults] = useState({
    data: [],
    itemsToShow: 3,
    expanded: false,
  });
  const [danger, setDanger] = useState(false);
  const isInitialMount = useRef(true);
  const { state, setResults } = useSearchContext();
  const [modal, setModal] = useState(false);
  let modalRef = useRef();

  const data = mockData.data.map((item) => {
    const editedDate = item[3].split("/");
    const getTime = new Date(
      editedDate[2],
      editedDate[1] - 1,
      editedDate[0]
    ).getTime();

    return {
      name: item[0],
      company: item[1],
      email: item[2],
      date: getTime,
      country: item[4],
      city: item[5],
    };
  }, {});

  let history = useHistory();

  /* modal state toggle */
  const changeModalVisibility = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(sampleResults.data);

    if (sampleResults.data.length > 0) {
      history.push("/search-results");
      setDanger(false);
    } else {
      setDanger(true);
    }
    setQuery("");
  };

  useEffect(() => {
    if (query.trim() !== "") {
      setSuggestions();
    }
  }, [query]);

  useEffect(() => {
    const handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };
    /* document.addEventListener("mousedown", handler); */

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  /*  useEffect(() => {
    localStorage.setItem("resultsData", JSON.stringify(sampleResults.data));
  }, [state.data]); */

  const showMoreOrLess = () => {
    sampleResults.itemsToShow === 3
      ? setSampleResults({
          ...sampleResults,
          itemsToShow: sampleResults.data.length,
          expanded: true,
        })
      : setSampleResults({ ...sampleResults, itemsToShow: 3, expanded: false });
  };

  const setSuggestions = () => {
    setSampleResults({
      ...sampleResults,
      data: data.filter((dataItem) =>
        dataItem.country.toLocaleLowerCase().includes(query)
      ),
    });
  };
  console.log(modal);
  /* console.log(sampleResults); */
  return (
    <section className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <input
          className={`${
            danger
              ? "searchbar__input searchbar__input--hover searchbar__input--danger"
              : "searchbar__input searchbar__input--hover"
          }`}
          type="text"
          value={query}
          placeholder="search something"
          onChange={handleChange}
        />
        <button className="searchbar__button">Search</button>
      </form>

      {query.length > 0 && (
        <div ref={modalRef} className="searchbar__samples">
          <SampleResultsList sampleResults={sampleResults} />

          <ShowButton
            sampleResults={sampleResults}
            showMoreOrLess={showMoreOrLess}
          />
        </div>
      )}
    </section>
  );
};

export default SearchBar;
