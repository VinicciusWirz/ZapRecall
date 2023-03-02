import { Btn, BtnList, CardContent } from "./styled";
import play from "../../assets/seta_play.png";
import flip from "../../assets/seta_virar.png";
import yayImg from "../../assets/icone_certo.png";
import nayImg from "../../assets/icone_erro.png";
import mehImg from "../../assets/icone_quase.png";

const buttons = [
    'Não lembrei',
    'Quase não lembrei',
    'Zap!'
]

export default function FlashCard({ index, question, answer, progress, result, btnFunctions, flipCard }) {
    const questionNumber = index + 1;
    if (progress === '0') {
        return (
            <CardContent progress={progress} data-test="flashcard">
                <p data-test="flashcard-text">Pergunta {questionNumber}</p>
                <img src={play} alt='play' onClick={() => flipCard(index)} data-test="play-btn" />
            </CardContent>
        )
    }
    if (progress === '1') {
        return (
            <CardContent progress={progress}>
                <p>{question}</p>
                <img src={flip} alt='flip' onClick={() => flipCard(index)} data-test="turn-btn" />
            </CardContent>
        )
    }
    if (progress === '2') {
        return (
            <CardContent progress={progress}>
                <p data-test="flashcard-text">{answer}</p>
                <BtnList>
                    {buttons.map((option, i) => <Btn
                        key={option}
                        position={i}
                        onClick={() => btnFunctions(i, index)}
                        data-test={i === 0 ? 'no-btn' : i === 1 ? 'partial-btn' : 'zap-btn'}
                    >{option}</Btn>
                    )}
                </BtnList>
            </CardContent>
        )
    }
    if (progress === '3') {
        const finalResult = {
            'nay': {
                color: '#FF3030',
                imgResult: nayImg,
                datatest: 'no-icon'
            },
            'meh': {
                color: '#FF922E',
                imgResult: mehImg,
                datatest: 'partial-icon'
            },
            'yay': {
                color: '#2FBE34',
                imgResult: yayImg,
                datatest: 'zap-icon'
            }
        };
        return (
            <CardContent progress={progress} conclusionColor={finalResult[result].color}>
                <p data-test="flashcard-text">Pergunta {questionNumber}</p>
                <img
                    src={finalResult[result].imgResult}
                    alt={result}
                    data-test={finalResult[result].datatest}
                />
            </CardContent>
        );
    }
}
