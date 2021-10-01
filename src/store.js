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
    default:
      return state;
  }
};
const store = createStore(reducerFunction, initialState);

export default store;
