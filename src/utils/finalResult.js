import play from "../assets/seta_play.png";
import flip from "../assets/seta_virar.png";
import yayImg from "../assets/icone_certo.png";
import nayImg from "../assets/icone_erro.png";
import mehImg from "../assets/icone_quase.png";
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
export default finalResult;