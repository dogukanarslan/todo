import Card from "./Card";
import AddCard from "./AddCard";

const Main = ({ cards, setCards }) => {
  return (
    <div className="main">
      {cards.map((card) => {
        return (
          <Card key={card.id} card={card} cards={cards} setCards={setCards} />
        );
      })}
      <AddCard cards={cards} setCards={setCards} />
    </div>
  );
};

export default Main;
