import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  if (user === null) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Sidebar user={user} />
      <Main cards={cards} setCards={setCards} />
    </div>
  );
};

export default Home;
