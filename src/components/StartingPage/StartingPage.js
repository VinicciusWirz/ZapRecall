import { useState } from "react";
import logo from "../../assets/logo.png";
import decks from "../../utils/decks";
import { FrontPage } from "./styled";

export default function StartingPage({ handleDeckSelection }) {
  const [display, setDisplay] = useState("flex");
  return (
    <FrontPage display={display}>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <label for="cards">Escolha seu Recall:</label>
      <select id="cards" name="cards" onChange={handleDeckSelection}>
        {Object.keys(decks).map((d) => (
          <option value={d} key={d}>
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </option>
        ))}
      </select>
      <button onClick={() => setDisplay("none")} data-test="start-btn">
        Iniciar Recall!
      </button>
    </FrontPage>
  );
}
