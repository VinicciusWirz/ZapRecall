import Reset from "./GlobalStyles/Reset";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import MainPage from "./components/MainPage/MainPage";
import StartingPage from "./components/StartingPage/StartingPage";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <StartingPage />
      <MainPage />
    </>
  );
}

export default App;