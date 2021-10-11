import React from "react";
import { useSelector, useDispatch } from "react-redux";
const ButtonsCategories = () => {
  const ticketsArray = useSelector((state) => state.ticketsArray);
  const dispatch = useDispatch();
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
          let sortedArray = ticketsArray.filter(
            (item) => item.segments[0].duration - item.segments[1].duration
          );
          dispatch({
            type: "sortByTimeDuration",
            payload: sortedArray,
          });
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};
export default ButtonsCategories;
