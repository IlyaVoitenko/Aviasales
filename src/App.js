import "./App.css";
import RenderTicketsCard from "./components/RenderTicketsCard";
import useUpdateTicketsStore from "./components/useUpdateTicketsStore";
function App() {
  useUpdateTicketsStore();
  return (
    <div className="App">
      <RenderTicketsCard />
    </div>
  );
}

export default App;
