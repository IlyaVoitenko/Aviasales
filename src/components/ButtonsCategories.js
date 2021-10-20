import React, { useState } from "react";
import style from "./css/ButtonsCategories.module.css";
import { useSelector, useDispatch } from "react-redux";
const ButtonsCategories = () => {
  const [isClickedСheapBtn, setClickedСheapBtn] = useState(false);
  const [isClickedTheFastesFilterBtn, setClickedTheFastesFilterBtn] =
    useState(false);
  const filteredTicketsArray = useSelector(
    (state) => state.filteredTicketsArray
  );
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={
          isClickedСheapBtn
            ? `${style.btnUnrichPriceActive} ${style.buttons}`
            : `${style.btnUnrichPriceNotActive} ${style.buttons}`
        }
        onClick={() => {
          setClickedСheapBtn(!isClickedСheapBtn);
          setClickedTheFastesFilterBtn(false);
          filteredTicketsArray.sort((a, b) => a.price - b.price);
          dispatch({
            type: "updateTickets",
            payload: filteredTicketsArray,
          });
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={
          isClickedTheFastesFilterBtn
            ? `${style.btnDurationActive} ${style.buttons}`
            : `${style.btnDurationNotActive} ${style.buttons}`
        }
        onClick={() => {
          setClickedTheFastesFilterBtn(!isClickedTheFastesFilterBtn);
          setClickedСheapBtn(false);
          filteredTicketsArray.sort(
            (item) => item.segments[0].duration - item.segments[1].duration
          );
          dispatch({
            type: "sortByTimeDuration",
            payload: filteredTicketsArray,
          });
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};
export default ButtonsCategories;
