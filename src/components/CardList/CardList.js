import styled from "styled-components"
import FlashCard from "../FlashCard/FlashCard"

export default function CardList({ deck, btnFunctions, progressArr, flipCard, resultArr }) {
    return (
        <List>
            {deck.map((card, i) => <FlashCard
                key={i}
                index={i}
                progress={progressArr[i]}
                result={resultArr[i]}
                question={card.question}
                answer={card.answer}
                flipCard={flipCard}
                btnFunctions={btnFunctions}
            />)}
        </List>
    )
}

const List = styled.ul`
    margin-bottom: 116px;
`