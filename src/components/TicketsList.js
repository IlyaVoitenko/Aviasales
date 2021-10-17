import React from 'react';
import { useSelector } from 'react-redux';
import TicketItem from './TicketItem';
const TicketsList = () => {
  const filteredTicketsArray = useSelector(
    (state) => state.filteredTicketsArray,
  );
  const filtersCheckBoxes = useSelector((state) => state.filtersCheckBoxes);

  function getStops(ticket) {
    return ticket.segments.map((segment) => segment.stops.length);
  }

  function filterTickets(ticket, index) {
    if (filtersCheckBoxes.includes('all') || filtersCheckBoxes.length === 0) {
      return true;
    }
    if (filtersCheckBoxes.includes('one') && getStops(ticket).includes(1)) {
      return true;
    }
    if (filtersCheckBoxes.includes('two') && getStops(ticket).includes(2)) {
      return true;
    }
    if (filtersCheckBoxes.includes('three') && getStops(ticket).includes(3)) {
      return true;
    }
    if (filtersCheckBoxes.includes('zero') && getStops(ticket).includes(0)) {
      return true;
    }
    return false;
  }

  return filteredTicketsArray.filter(filterTickets).map((ticket, index) => {
    return <TicketItem key={index} ticket={ticket} />;
  });
};
export default TicketsList;
