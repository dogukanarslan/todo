import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Card = ({ card, cards, setCards, setSelectedCategory }) => {
  const [inputText, setInputText] = useState("");
  const [title, setTitle] = useState("");

  const handleDelete = () => {
    setCards(
      cards.filter((item) => {
        return item.id !== card.id;
      })
    );
  };

  return (
    <div className="card">
      <Form
        setInputText={setInputText}
        inputText={inputText}
        title={title}
        setTitle={setTitle}
        card={card}
        cards={cards}
        setCards={setCards}
        setSelectedCategory={setSelectedCategory}
      />
      <TodoList card={card} cards={cards} setCards={setCards} />
      <span className="card-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </span>
    </div>
  );
};

export default Card;
