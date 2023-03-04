import play from "../assets/seta_play.png";
import flip from "../assets/seta_virar.png";
import zapImg from "../assets/icone_certo.png";
import noImg from "../assets/icone_erro.png";
import partialImg from "../assets/icone_quase.png";

const finalResult = {
    'play': {
        color: '#333333',
        imgResult: play,
        datatest: 'play-btn'
    },
    'flip': {
        color: '#333333',
        imgResult: flip,
        datatest: 'turn-btn'
    },
    'no': {
        color: '#FF3030',
        imgResult: noImg,
        datatest: 'no-icon'
    },
    'partial': {
        color: '#FF922E',
        imgResult: partialImg,
        datatest: 'partial-icon'
    },
    'zap': {
        color: '#2FBE34',
        imgResult: zapImg,
        datatest: 'zap-icon'
    }
};
export default finalResult;