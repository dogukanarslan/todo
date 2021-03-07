import Card from "./Card";
import AddCard from "./AddCard";

const Main = ({ cards, setCards, filteredCards, setFilteredCards }) => {
  return (
    <div className="main">
      {filteredCards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            cards={filteredCards}
            setCards={setCards}
          />
        );
      })}
      <AddCard
        cards={cards}
        setCards={setCards}
        filteredCards={filteredCards}
        setFilteredCards={setFilteredCards}
      />
    </div>
  );
};

export default Main;
