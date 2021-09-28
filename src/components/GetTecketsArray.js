import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const GetTecketsArray = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);
  const ticketsArray = useSelector((state) => state.ticketsArray);
  console.log(ticketsArray);
  useEffect(() => {
    fetch(`https://front-test.beta.aviasales.ru/search`)
      .then((data) => data.json())
      .then((searchId) => {
        return dispatch({
          type: "updateSearchId",
          payload: searchId,
        });
      })
      .catch((error) => console.log("error: ", error));
  }, [dispatch]);
  useEffect(() => {
    if (!searchId) {
      return;
    }
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then((data) => data.json())
      .then(({ tickets }) => {
        return dispatch({
          type: "updateTickets",
          payload: tickets,
        });
      })
      .catch((error) => console.log("error: ", error));
  }, [dispatch, searchId]);
  return ticketsArray;
};

export default GetTecketsArray;
