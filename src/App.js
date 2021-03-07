import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <Sidebar />
      <Main cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
