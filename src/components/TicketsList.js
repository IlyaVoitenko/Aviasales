import React from "react";
import { useSelector } from "react-redux";
import TicketItem from "./TicketItem";
const TicketsList = () => {
  const filteredTicketsArray = useSelector(
    (state) => state.filteredTicketsArray
  );
  const filtersCheckBoxes = useSelector((state) => state.filtersCheckBoxes);
  function getStops(stops) {
    return stops.segments.map((segment) => segment.stops.length);
  }
  function filterArray(ticket) {
    if (filtersCheckBoxes.includes("one") && getStops(ticket).includes(1)) {
      return true;
    }
    if (filtersCheckBoxes.includes("two") && getStops(ticket).includes(2)) {
      return true;
    }
    if (filtersCheckBoxes.includes("three") && getStops(ticket).includes(3)) {
      return true;
    }
    if (filtersCheckBoxes.includes("zero") && getStops(ticket).includes(0)) {
      return true;
    }
    if (filtersCheckBoxes.length === 0 || filtersCheckBoxes.includes("all")) {
      if (filtersCheckBoxes.includes("one") && getStops(ticket).includes(1)) {
        return false;
      }
      if (filtersCheckBoxes.includes("two") && getStops(ticket).includes(2)) {
        return false;
      }
      if (filtersCheckBoxes.includes("three") && getStops(ticket).includes(3)) {
        return false;
      }
      if (filtersCheckBoxes.includes("zero") && getStops(ticket).includes(0)) {
        return false;
      }
      return true;
    }
  }
  return filteredTicketsArray
    .filter(filterArray)
    .map((ticket, index) => {
      return <TicketItem key={index} ticket={ticket} />;
    })
    .slice(null, 5);
};
export default TicketsList;
