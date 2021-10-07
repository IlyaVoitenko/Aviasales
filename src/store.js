import { createStore } from "redux";
const initialState = {
  searchId: "",
  ticketsArray: [],
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "updateSearchId":
      return { ...state, ...action.payload };
    case "updateTickets":
      return { ...state, ticketsArray: [...action.payload] };
    case "sortInexpensiveTickets":
      return { ...state, ticketsArray: [...action.payload] };
    case "sortByTimeDuration":
      return { ...state, ticketsArray: [...action.payload] };
    case "sortWithOutTransfers":
      return { ...state, ticketsArray: [...action.payload] };
    case "sortWithOneTransfer":
      return { ...state, ticketsArray: [...action.payload] };
    default:
      return state;
  }
};
const store = createStore(reducerFunction, initialState);
console.log(store);
export default store;
