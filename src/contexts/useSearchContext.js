import React, { createContext, useContext, useReducer } from "react";
import searchReducer from "../reducers/searchReducer";

const SearchContext = createContext();

const initialState = { data: [] };

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const setResults = (data) => {
    dispatch({
      type: "SET_RESULTS",
      payload: data,
    });
  };

  const changeSort = (event) => {
    const value = event.target.value;
    dispatch({
      type: "CHANGE_SORT",
      payload: value,
    });
  };

  return (
    <SearchContext.Provider value={{ state, setResults, changeSort }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
