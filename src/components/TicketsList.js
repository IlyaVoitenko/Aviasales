import React from "react";
import { useSelector } from "react-redux";
import TicketItem from "./TicketItem";
const TicketsList = () => {
  const filteredTicketsArray = useSelector(
    (state) => state.filteredTicketsArray
  );
  return filteredTicketsArray.map((ticket, index) => {
    return <TicketItem key={index} ticket={ticket} />;
  });
};
export default TicketsList;
