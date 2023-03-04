import styled from "styled-components";
import FlashCard from "../FlashCard/FlashCard";

export default function CardList(props) {
    const { deck, btnFunctions, progressArr, flipCard, resultArr, resultId, questionProgressNumber, decklength } = props;
    return (
        <List questionProgressNumber={questionProgressNumber} decklength={decklength}>
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
    );
}

const List = styled.ul`
    margin-bottom: ${({ questionProgressNumber, decklength }) => questionProgressNumber === decklength ? '250px' : '116px'};
`;