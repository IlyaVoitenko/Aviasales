import React from "react";
import { useSelector } from "react-redux";
import TicketItem from "./TicketItem";
const TicketsList = () => {
  const ticketsArray = useSelector((state) => state.ticketsArray);
  return ticketsArray.map((ticket, index) => {
    return <TicketItem key={index} ticket={ticket} />;
  });
};
export default TicketsList;
