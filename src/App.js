import Reset from "./GlobalStyles/Reset";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import MainPage from "./components/MainPage/MainPage";
import StartingPage from "./components/StartingPage/StartingPage";
import { useState } from "react";
import decks from "./utils/decks";

function App() {
  const [deck, selectDeck] = useState(decks["react"].cards);

  function handleDeckSelection(event) {
    const value = event.target.value;
    selectDeck(decks[value].cards);
  }

  return (
    <>
      <Reset />
      <GlobalStyle />
      <StartingPage handleDeckSelection={handleDeckSelection} />
      <MainPage deck={deck} />
    </>
  );
}

export default App;
