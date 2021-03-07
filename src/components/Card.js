import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import SaveCard from "./SaveCard";
import SavedOptions from "./SavedOptions";

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
    <div className={card.isSaved ? "card card-saved" : "card"}>
      <SavedOptions
        isSaved={card.isSaved}
        handleDelete={handleDelete}
        setCards={setCards}
        cards={cards}
        card={card}
      />
      <div className={card.isSaved ? "card-hide" : ""}>
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
        {!card.isSaved && (
          <span className="card-delete" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        )}
        {!card.isSaved && (
          <SaveCard setCards={setCards} cards={cards} card={card} />
        )}
      </div>
    </div>
  );
};

export default Card;
