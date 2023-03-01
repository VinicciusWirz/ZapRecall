import FlashCard from "../FlashCard/FlashCard"
import List from "./styled"

export default function CardList() {
    return (
        <List>
            <FlashCard progress='0'/>
            <FlashCard progress='1'/>
            <FlashCard progress='2'/>
            <FlashCard progress='3' result='yay'/>
            <FlashCard progress='3' result='nay'/>
            <FlashCard progress='3' result='meh'/>
        </List>
    )
}