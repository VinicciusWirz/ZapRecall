import logo from "../../assets/logo.png"
import CardList from "../CardList/CardList"
import { Header, Footer } from "./styled"
import deck from "../../utils/deck"
import { useState } from "react"

export default function MainPage() {
    const [resultArr, setResultArr] = useState(Array(deck.length).fill(''));
    const [progressArr, setProgressArr] = useState(Array(deck.length).fill('0'));
    const [questionProgressNumber, setQuestionProgressNumber] = useState(0);
    const resultId = {
        0: 'nay',
        1: 'meh',
        2: 'yay'
    }

    function pickAnswer(id, cardIndex) {
        let newResultArray = [...resultArr];
        flipCard(cardIndex);
        newResultArray[cardIndex] = id;
        setResultArr(newResultArray);
        setQuestionProgressNumber(questionProgressNumber + 1);
    }

    function flipCard(id) {
        let newProgress = (Number(progressArr[id]) + 1).toString();
        let newProgressArr = [...progressArr];
        newProgressArr[id] = newProgress;
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
                resultId={resultId}
            />
            <Footer data-test="footer">
                <p>{questionProgressNumber}/{deck.length} CONCLUÍDOS</p>
            </Footer>
        </>
    )
}