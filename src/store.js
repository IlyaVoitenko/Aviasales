import { createStore } from "redux";
const initialState = {
  searchId: "",
  ticketsArray: [],
  filteredTicketsArray: [],
  isUseFilter: true,
  filtersCheckBoxes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateSearchId":
      return { ...state, ...action.payload };
    case "updateTickets":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "sortInexpensiveTickets":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "sortByTimeDuration":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "changeFilter":
      const { checked, value } = action.payload;
      if (checked) {
        return {
          ...state,
          filtersCheckBoxes: [...state.filtersCheckBoxes, value],
        };
      }
      return {
        ...state,
        filtersCheckBoxes: [
          ...state.filtersCheckBoxes.filter((item) => item !== value),
        ],
      };
    default:
      return state;
  }
};
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
