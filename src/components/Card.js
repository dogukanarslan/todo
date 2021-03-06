import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Card = ({ card, cards, setCards }) => {
  const [inputText, setInputText] = useState("");

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
    </div>
  );
};

export default Card;
