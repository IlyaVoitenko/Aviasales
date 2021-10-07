import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./css/FilterTicketsByRadio.module.css";
const FilterTicketsByRadio = () => {
  let ticketsArray = useSelector((state) => state.ticketsArray);
  let dispatch = useDispatch();
  console.log("ticketsArray :", ticketsArray);

  return (
    <div className={style.container}>
      <br />
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label className={style.filter}>
        <input type="checkbox" id="radioButton" onChange={() => {}}></input>
        Все
      </label>
      <label className={style.filter}>
        <input
          type="checkbox"
          id="radioButton"
          onChange={() => {
            let arrSorted = ticketsArray.filter(
              (item) =>
                item.segments[0].stops.length === 0 &&
                item.segments[1].stops.length === 0
            );
            dispatch({
              type: "sortWithOutTransfers",
              payload: arrSorted,
            });
          }}
        ></input>
        Без пересадок
      </label>
      <label className={style.filter}>
        <input
          type="checkbox"
          id="radioButton"
          onChange={() => {
            let arrSorted = ticketsArray.filter(
              (item) =>
                item.segments[0].stops.length === 1 &&
                item.segments[1].stops.length === 1
            );
            dispatch({
              type: "sortWithOneTransfer",
              payload: arrSorted,
            });
          }}
        ></input>
        1 пересадка
      </label>
      <label className={style.filter}>
        <input
          type="checkbox"
          id="radioButton"
          onChange={() => {
            let arrSorted = ticketsArray.filter(
              (item) =>
                item.segments[0].stops.length === 2 &&
                item.segments[1].stops.length === 2
            );
            dispatch({
              type: "sortWithOutTransfers",
              payload: arrSorted,
            });
          }}
        ></input>
        2 пересадка
      </label>
      <label className={style.filter}>
        <input
          type="checkbox"
          id="radioButton"
          onChange={() => {
            let arrSorted = ticketsArray.filter(
              (item) =>
                item.segments[0].stops.length === 3 &&
                item.segments[1].stops.length === 3
            );
            dispatch({
              type: "sortWithOutTransfers",
              payload: arrSorted,
            });
          }}
        ></input>
        3 пересадка
      </label>
    </div>
  );
};
export default FilterTicketsByRadio;
