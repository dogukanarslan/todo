import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  if (user === null) {
    return <Redirect to="/login" />;
  }

  return (
    <div class="app">
      <Sidebar user={user} cards={cards} setFilteredCards={setFilteredCards} />
      <Main
        className="main"
        filteredCards={filteredCards}
        cards={cards}
        setFilteredCards={setFilteredCards}
        setCards={setCards}
      />
    </div>
  );
};

export default Home;
