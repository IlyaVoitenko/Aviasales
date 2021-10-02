import "./App.css";
import RenderTicketsCard from "./components/TicketsList";
import ButtonsCategories from "./components/ButtonsCategories";
import useUpdateTicketsStore from "./components/useUpdateTicketsStore";
function App() {
  useUpdateTicketsStore();
  return (
    <div className="App">
      <div className="containerComponents">
        <div></div>
        <div>
          <ButtonsCategories />
          {/* <RenderTicketsCard /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
