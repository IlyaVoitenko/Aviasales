import React from "react";
import { useDispatch } from "react-redux";
import style from "./css/FilterTicketsByRadio.module.css";
const FilterTicketsByRadio = () => {
  let dispatch = useDispatch();
  function changeFilters({ target }) {
    const { checked, value } = target;
    dispatch({
      type: "changeFilter",
      payload: { checked, value },
    });
  }
  //пока оставим
  function dispatchFilter(array, isUseFilter, typeDispatch, filter) {
    console.log(isUseFilter);
    let arrSorted = array.filter(
      (item) =>
        item.segments[0].stops.length === filter &&
        item.segments[1].stops.length === filter
    );
    if (isUseFilter === true) {
      dispatch({
        type: typeDispatch,
        payload: arrSorted,
      });
    }
    if (isUseFilter === false) {
      dispatch({
        type: typeDispatch,
        payload: arrSorted,
      });
    }
  }
  return (
    <div className={style.container}>
      <br />
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label className={style.filterAll}>
        <input
          className={style.checkbox}
          value="all"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        Все
      </label>
      <label className={style.filterWithOut}>
        <input
          className={style.checkbox}
          value="zero"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        Без пересадок
      </label>
      <label className={style.filter}>
        <input
          className={style.checkbox}
          value="one"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        1 пересадка
      </label>
      <label className={style.filter}>
        <input
          className={style.checkbox}
          value="two"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        2 пересадка
      </label>
      <label className={style.filter}>
        <input
          className={style.checkbox}
          value="three"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        3 пересадка
      </label>
    </div>
  );
};
export default FilterTicketsByRadio;
