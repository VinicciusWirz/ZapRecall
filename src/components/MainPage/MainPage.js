import logo from "../../assets/logo.png"
import CardList from "../CardList/CardList"
import Header from "./styled"


export default function MainPage() {
    return (
        <>
            <Header>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </Header>
            <CardList />
        </>
    )
}

