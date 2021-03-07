const SavedOptions = ({ isSaved, setCards, handleDelete, cards, card }) => {
  const unsaveCard = () => {
    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return { ...item, isSaved: !item.isSaved };
        }

        return item;
      })
    );
  };

  if (isSaved) {
    return (
      <div className={card.isSaved ? "card-saved-options" : ""}>
        <button className="btn btn-dark" onClick={unsaveCard}>Edit</button>
        <button className="btn btn-dark" onClick={handleDelete}>Delete</button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SavedOptions;
