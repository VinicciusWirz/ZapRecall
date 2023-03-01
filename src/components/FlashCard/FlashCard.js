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

export default function FlashCard({ progress, result }) {
    if (progress === '0') {
        return (
            <CardContent>
                <p>Pergunta 1</p>
                <img src={play} alt='play' />
            </CardContent>
        )
    }
    if (progress === '1') {
        return (
            <CardContent progress='1'>
                <p>O que é JSX?</p>
                <img src={flip} alt='flip' />
            </CardContent>
        )
    }
    if (progress === '2') {
        return (
            <CardContent progress='2'>
                <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                <BtnList>
                    {buttons.map((option, i) => <Btn key={option} position={i}>{option}</Btn>)}
                </BtnList>
            </CardContent>
        )
    }
    if (progress === '3'){
        let color = ''
        let imgResult = '';
        if(result === 'yay'){
            color = '#2FBE34';
            imgResult = yayImg;
        }
        if (result === 'nay'){
            color = '#FF3030';
            imgResult = nayImg;
        }
        if (result === 'meh'){
            color = '#FF922E';
            imgResult = mehImg;
        }
        return (
            <CardContent progress='3' conclusionColor={color}>
                <p>Pergunta 1</p>
                <img src={imgResult} alt={result} />
            </CardContent>
        )
    }
}
