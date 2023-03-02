import logo from "../../assets/logo.png"
import CardList from "../CardList/CardList"
import { Header, Footer } from "./styled"
import deck from "../../utils/deck"
import { useState } from "react"

export default function MainPage() {
    const [resultArr, setResultArr] = useState(Array(deck.length).fill(''));
    const [progressArr, setProgressArr] = useState(Array(deck.length).fill('0'));

    function pickAnswer(id, cardIndex) {
        let newResult = '';
        let newResultArray = [...resultArr];
        flipCard(cardIndex);
        if (id === 0) {
            newResult = 'nay';
        }
        if (id === 1) {
            newResult = 'meh';
        }
        if (id === 2) {
            newResult = 'yay';
        }
        newResultArray[cardIndex] = newResult;
        setResultArr(newResultArray);
    }

    function flipCard(id) {
        let newProgress = (Number(progressArr[id]) + 1).toString();
        let newProgressArr = [...progressArr];
        newProgressArr[id] = newProgress
        setProgressArr(newProgressArr);
    }

    return (
        <>
            <Header>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </Header>
            <CardList
                deck={deck}
                btnFunctions={pickAnswer}
                flipCard={flipCard}
                progressArr={progressArr}
                resultArr={resultArr}
            />
            <Footer data-test="footer">
                <p>X/{deck.length} CONCLUÍDOS</p>
            </Footer>
        </>
    )
}