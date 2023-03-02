import { Btn, BtnList, CardContent } from "./styled";
import finalResult from "../../utils/finalResult";

const buttons = [
    'Não lembrei',
    'Quase não lembrei',
    'Zap!'
];

export default function FlashCard({ index, question, answer, progress, result, btnFunctions, flipCard, resultId }) {
    const questionNumber = `Pergunta ${(index + 1).toString()}`;
    const text = progress === '0' ? questionNumber : progress === '1' ? question : progress === '2' ? answer : questionNumber;

    function DynamicIcons() {
        if (progress === '2') {
            return (
                <BtnList>
                    {buttons.map((option, i) => <Btn
                        key={option}
                        position={i}
                        onClick={() => btnFunctions(resultId[i], index)}
                        data-test={i === 0 ? 'no-btn' : i === 1 ? 'partial-btn' : 'zap-btn'}
                    >{option}</Btn>
                    )}
                </BtnList>
            );
        } else {
            return (<img src={finalResult[result].imgResult}
                alt={result}
                data-test={finalResult[result].datatest}
                onClick={() => flipCard(index, progress)}
            />);
        }
    }

    return (
        <CardContent progress={progress} conclusionColor={finalResult[result].color} data-test='flashcard'>
            <p data-test="flashcard-text">{text}</p>
            <DynamicIcons />
        </CardContent>
    );
}
