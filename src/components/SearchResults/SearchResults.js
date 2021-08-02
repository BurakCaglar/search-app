import React, { useEffect, useState } from "react";
import { useSearchContext } from "../../contexts/useSearchContext";
import ReactPaginate from "react-paginate";
import SearchResult from "./SearchResult";
import Sort from "../Sort/Sort";

const SearchResults = () => {
  const { state } = useSearchContext();
  const [results, setResults] = useState(state.data);
  const [pageNumber, setPageNumber] = useState(0);
  const resultsPerPage = 7;
  const pageVisited = pageNumber * resultsPerPage;
  const pageCount = Math.ceil(results.length / resultsPerPage);

  /* rendered results */
  const renderedResults = results
    .slice(pageVisited, pageVisited + resultsPerPage)
    .map((item, index) => {
      /*  console.log(item); */
      return (
        <div key={index} className="search-results__list">
          <ul className="searchbar__list">
            <SearchResult item={item} index={index} />
          </ul>
        </div>
      );
    });

  /* local storeages */
  /*   const getLocalStorage = (data) => {
    const getLocalStorage = JSON.parse(localStorage.getItem(`${data}`));
    return getLocalStorage;
  };

  const setLocalStorage = (data) => {
    const setLocalStorage = localStorage.setItem("pageNumber", `${data}`);
    return setLocalStorage;
  };
 */
  /* use effects */
  useEffect(() => {
    setResults(state.data);
  }, [state.data]);

  /* change page */
  const changePage = async ({ selected }) => {
    await setPageNumber(selected);
    /*     await setLocalStorage(selected);
     */
  };

  return (
    <section className="search-results__list-wrapper">
      {(results.length > 1 || state.data.length > 1) && <Sort />}
      {renderedResults}
      {results.length > 3 && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__previousbutton"}
          nextLinkClassName={"pagination__nextbutton"}
          disabledClassName={"pagination__disabled"}
          activeClassName={"pagination__active"}
          pageClassName={"pagination_button"}
          //  initialPage={getLocalStorage("pageNumber")}
        />
      )}
    </section>
  );
};

export default SearchResults;
