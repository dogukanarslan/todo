import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Card = ({ card, cards, setCards }) => {
  const [inputText, setInputText] = useState("");

  const handleDelete = () => {
    setCards(
      cards.filter((item) => {
        return item.id !== card.id;
      })
    );
  };

  return (
    <div>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        card={card}
        cards={cards}
        setCards={setCards}
      />
      <TodoList card={card} cards={cards} setCards={setCards} />
      <button onClick={handleDelete}>Delete Card</button>
    </div>
  );
};

export default Card;
