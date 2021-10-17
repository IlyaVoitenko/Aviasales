import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './css/FilterTicketsByRadio.module.css';
const FilterTicketsByRadio = () => {
  let filtersCheckBoxes = useSelector((state) => state.filtersCheckBoxes);

  let dispatch = useDispatch();

  function changeFilters({ target }) {
    const { checked, value } = target;
    dispatch({
      type: 'changeFilter',
      payload: { checked, value },
    });
  }

  function dispatchFilter(array, isUseFilter, typeDispatch, filter) {
    console.log(isUseFilter);
    let arrSorted = array.filter(
      (item) =>
        item.segments[0].stops.length === filter &&
        item.segments[1].stops.length === filter,
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
      <label className={style.filter}>
        <input
          value="all"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        Все
      </label>
      <label className={style.filter}>
        <input
          value="zero"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        Без пересадок
      </label>
      <label className={style.filter}>
        <input
          value="one"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        1 пересадка
      </label>
      <label className={style.filter}>
        <input
          value="two"
          type="checkbox"
          id="radioButton"
          onChange={changeFilters}
        ></input>
        2 пересадка
      </label>
      <label className={style.filter}>
        <input
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
