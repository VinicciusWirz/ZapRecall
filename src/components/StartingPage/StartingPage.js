import { useState } from "react";
import logo from "../../assets/logo.png";
import { FrontPage } from "./styled";


export default function StartingPage() {
    const [display, setDisplay] = useState('flex');
    return (
        <FrontPage display={display}>
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={() => setDisplay('none')} data-test="start-btn">Iniciar Recall!</button>
        </FrontPage>
    );
}