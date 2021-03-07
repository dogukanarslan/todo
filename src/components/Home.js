import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [user, setUser] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  useEffect(() => {
    if ("All" === selectedCategory) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((item) => item.category === selectedCategory)
      );
    }
  }, [cards, selectedCategory]);

  if (user === null) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="app">
      <Sidebar
        user={user}
        cards={cards}
        setFilteredCards={setFilteredCards}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Main
        className="main"
        filteredCards={filteredCards}
        cards={cards}
        setFilteredCards={setFilteredCards}
        setCards={setCards}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default Home;
