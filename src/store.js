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
    case "allTickets":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "sortWithOutTransfers":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "sortWithOneTransfer":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "sortWithTwoTransfers":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "sortWithThreeTransfers":
      return { ...state, filteredTicketsArray: [...action.payload] };
    case "changeFilter":
      state.filtersCheckBoxes.forEach((item) => {
        if (item.checked === false) {
          state.filtersCheckBoxes.pop(item);
        }
      });
      return {
        ...state,
        filtersCheckBoxes: [...state.filtersCheckBoxes, action.payload],
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
