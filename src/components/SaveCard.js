const SaveCard = ({ setCards, cards, card }) => {
  const saveCard = () => {
    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return { ...item, isSaved: !item.isSaved };
        }

        return item;
      })
    );
  };

  return (
    <div className="card-save">
      <button className="btn btn-success" onClick={saveCard}>Save</button>
    </div>
  );
};

export default SaveCard;
