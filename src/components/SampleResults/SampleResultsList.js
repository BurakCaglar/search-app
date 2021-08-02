import React from "react";
import { SampleResult } from "../index";

const SampleResultsList = ({ sampleResults }) => {
  /* Rendered Sample Results List */
  const renderedSampleResultsList = sampleResults.data
    .slice(0, sampleResults.itemsToShow)
    .map((item, index) => (
      <SampleResult item={item} index={index} key={index} />
    ));

  return <ul className="searchbar__list">{renderedSampleResultsList}</ul>;
};

export default SampleResultsList;
