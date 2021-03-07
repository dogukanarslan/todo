import { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Home = () => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      <Sidebar />
      <Main cards={cards} setCards={setCards} />
    </div>
  );
};

export default Home;
