import "./App.css";
import TicketsList from "./components/TicketsList";
import ButtonsCategories from "./components/ButtonsCategories";
import useUpdateTicketsStore from "./components/useUpdateTicketsStore";
import FilterTicketsByRadio from "./components/FilterTicketsByRadio";
function App() {
  useUpdateTicketsStore();
  return (
    <div className="App">
      <div className="containerComponents">
        <div>
          <FilterTicketsByRadio />
        </div>
        <div>
          <ButtonsCategories />
          <TicketsList />
        </div>
      </div>
    </div>
  );
}

export default App;
