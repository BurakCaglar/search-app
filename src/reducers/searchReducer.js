const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return { ...state, data: action.payload };

    case "CHANGE_SORT":
      let newData = [];
      let tempData = state.data.slice();
      if (action.payload === "date-lowest") {
        newData = tempData.sort((a, b) => a.date - b.date);
      }
      if (action.payload === "date-highest") {
        newData = tempData.sort((a, b) => b.date - a.date);
      }
      if (action.payload === "name-az") {
        newData = tempData.sort((a, b) => {
          return a.country.localeCompare(b.country);
        });
      }
      if (action.payload === "name-za") {
        newData = tempData.sort((a, b) => {
          return b.country.localeCompare(a.country);
        });
      }
      return { ...state, data: newData };

    case "SET_SAMPLES_DATA":
      return { ...state, samplesData: action.payload };

    default:
      return state;
  }
};

export default searchReducer;
