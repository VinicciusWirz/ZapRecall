import Reset from "./GlobalStyles/Reset"
import GlobalStyle from "./GlobalStyles/GlobalStyle"

import styled from "styled-components";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MainPage />

    </>
  );
}

export default App;