import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../../contexts/useSearchContext";
import ArrowIcon from "../../assets/images/arrow.png";

const Sort = () => {
  const [modal, setModal] = useState(false);
  const { state, changeSort } = useSearchContext();
  let modalRef = useRef();

  /* modal state toggle */
  const changeModalVisibility = () => {
    setModal(!modal);
  };

  /* use effect */

  /*  useEffect(() => {
    const handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };
        document.addEventListener("mousedown", handler);
    
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }); */

  return (
    <div className="sort">
      <div className="sort__headline">
        <img src={ArrowIcon} alt="arrow icon" />
        <option className="" ref={modalRef} onClick={changeModalVisibility}>
          Order By
        </option>
      </div>
      {modal && (
        <div className="sort__items">
          <option
            className="sort__item"
            onClick={(e) => changeSort(e)}
            value="name-az"
          >
            Name ascending
          </option>
          <option
            className="sort__item"
            onClick={(e) => changeSort(e)}
            value="name-za"
          >
            Name descending
          </option>
          <option
            className="sort__item"
            onClick={(e) => changeSort(e)}
            value="date-lowest"
          >
            Year ascending
          </option>
          <option
            className="sort__item"
            onClick={(e) => changeSort(e)}
            value="date-highest"
          >
            Year descending
          </option>
        </div>
      )}
    </div>
  );
};

export default Sort;
