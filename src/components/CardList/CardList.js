import styled from "styled-components"
import FlashCard from "../FlashCard/FlashCard"

export default function CardList({ deck, btnFunctions, progressArr, flipCard, resultArr, resultId }) {
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
                resultId={resultId}
            />)}
        </List>
    )
}

const List = styled.ul`
    margin-bottom: 116px;
`