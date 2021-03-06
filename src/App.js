import { useState } from "react";
import Card from "./components/Card";
import AddCard from "./components/AddCard";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      {cards.map((card) => {
        return (
          <Card key={card.id} card={card} cards={cards} setCards={setCards} />
        );
      })}
      <AddCard cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
