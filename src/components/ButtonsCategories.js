import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RenderTicketsCard from "./TicketsList";
const ButtonsCategories = () => {
  const ticketsArray = useSelector((state) => state.ticketsArray);
  const dispatch = useDispatch();
  console.log(ticketsArray);
  return (
    <div>
      <button
        onClick={() => {
          ticketsArray.sort((a, b) => a.price - b.price);
          dispatch({
            type: "updateTickets",
            payload: ticketsArray,
          });
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        onClick={() => {
          ticketsArray.sort(
            (a, b) => a.segments[0].duration - b.segments[1].duration
          );
          dispatch({
            type: "sortByTimeDuration",
            payload: ticketsArray,
          });
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <RenderTicketsCard arrayTickets={ticketsArray} />
    </div>
  );
};
export default ButtonsCategories;
