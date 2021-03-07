import Card from "./Card";
import AddCard from "./AddCard";

const Main = ({
  cards,
  setCards,
  filteredCards,
  setFilteredCards,
  setSelectedCategory,
}) => {
  return (
    <div className="main">
      {filteredCards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            cards={cards}
            filteredCards={filteredCards}
            setCards={setCards}
            setSelectedCategory={setSelectedCategory}
          />
        );
      })}
      <AddCard
        cards={cards}
        setCards={setCards}
        filteredCards={filteredCards}
        setFilteredCards={setFilteredCards}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default Main;
