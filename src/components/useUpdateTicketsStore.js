import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useGetStore = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);
  useEffect(() => {
    fetch(`https://front-test.beta.aviasales.ru/search`)
      .then((data) => data.json())
      .then((searchId) => {
        dispatch({
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
        dispatch({
          type: "updateTickets",
          payload: tickets,
        });
      })
      .catch((error) => console.log("error: ", error));
  }, [dispatch, searchId]);
};
export default useGetStore;
