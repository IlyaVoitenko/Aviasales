import React from "react";
import { useSelector } from "react-redux";
const RenderTicketsCard = () => {
  const ticketsArray = useSelector((state) => state.ticketsArray);
  console.log(ticketsArray);
  return <div>ticketsArray</div>;
};
export default RenderTicketsCard;
