import React, { useState } from "react"
import CardDeckList from "./CardDeckList";
import Attribute from "./Attribute";


function Blackjack(props) {
    const [allCards, setAllCards] = useState(CardDeckList())
    const [pCards, setPCards] = useState([]) 
    const [dCards, setDCards] = useState([])
    const [shuffledDeck, setShuffledDeck] = useState([])
    const [pCardsTotal, setPCardsTotal] = useState(0)
    const [dCardsTotal, setDCardsTotal] = useState(0)
    const [notDTurn, setNotDTurn] = useState(true)
    const [gameActive, setGameActive] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    let playerMax
    let dealerMax
    let number = props.number
    let setNumber = props.setNumber
    let endOfGameMessage = ""

    function shuffleDeck(input) {
        let CardList = [...input]
        for(var i = 0; i < CardList.length; i++) {
            var tempCard = CardList[i];
            var randomIndex = Math.floor(Math.random() * CardList.length);
            CardList[i] = CardList[randomIndex];
            CardList[randomIndex] = tempCard;
        }
        return CardList;
    }

    const handleGameStart = () => {
        // shuffle cards
        setNotDTurn(true)
        let pCardsSum = 0
        let dCardsSum = 0
        let shuffledCards = shuffleDeck(allCards)
        if (allCards.length < 15) {
            shuffledCards = shuffleDeck(CardDeckList())
        }
        let allCardsCopy = [...shuffledCards]
        // shift to remove one card from all cards, give one to player

        let newPlayersCards = [allCardsCopy.shift()]
        // get sum of player's card
        pCardsSum += newPlayersCards[0].value 
        // console.log(newPlayersCards[0].value)
        // shift to remove one card from all cards, give one (face down) to dealer
        let newDealersCards = [allCardsCopy.shift()]
        // get sum of dealer's card
        dCardsSum += newDealersCards[0].value
        // shift to remove one card from all cards, give second card to player
        newPlayersCards.push(allCardsCopy.shift())
        // get new value of player's cards
        pCardsSum += newPlayersCards[1].value
        // shift to remove one card from all cards, give second one to dealer
        newDealersCards.push(allCardsCopy.shift())
        // get new value of dealer's cards
        dCardsSum += newDealersCards[1].value
        // dCardsSum += newDealersCards.value
        // 48 cards left in deck
        setAllCards (allCardsCopy)
        // player has 2 cards
        setPCards (newPlayersCards)
        // dealer has 2 cards
        setDCards (newDealersCards)
        // total sum of players cards after first two cards dealt
        setPCardsTotal (pCardsSum)
        // total sum of players cards after first two cards dealt
        setDCardsTotal (dCardsSum)

        // check to see if one of the player's cards is an ace, add 10 if true
        if (newPlayersCards.some(card => card.value === 1)) {
            pCardsSum = pCardsSum + 10
        }
        // check to see if one of the dealer's cards is an ace, add 10 if true
        if (newDealersCards.some(card => card.value === 1)) {
            dCardsSum = dCardsSum + 10
        }

        // if player and dealer both have blackjack, it's a tie, game over
        if ((dCardsSum === 21 || dealerMax === 21) && (pCardsSum === 21 || playerMax === 21)) {
            endOfGameMessage = "Tied, game over. Play again!"
        // if dealer has 21, dealer wins, game over
        } else if 
            ((dCardsSum === 21 || dealerMax === 21) && pCardsSum < 21) {
        // if player has 21, player wins, game over
        } else if
            ((pCardsSum === 21 || playerMax === 21)) {
                endOfGameMessage = "Player wins. Play again!"
        }
        // if none of the above conditions apply, start game
        else 
            {setGameActive (true)}
}
    
    // dealing another card to player when player clicks on hit
    function addPlayerCard() {
        let pCardsSum = pCardsTotal
        let dCardsSum = dCardsTotal

        if (pCardsSum < 21) {
        // creating player's new hand with any added cards
        let playerNewHand = pCards
        // getting deck with remaining cards
        let allCardsCopy = allCards
        // updating players hand to include new card
        playerNewHand.push(allCardsCopy.shift())
        // adding sum of new card to player's hand
        pCardsSum += playerNewHand[playerNewHand.length-1].value
        // cards left in deck
        setAllCards (allCardsCopy)
        // player has 3 (or more) cards
        setPCards (playerNewHand)
        // if player goes over 21, cannot hit anymore
        if (pCardsSum > 21) {
            endOfGameMessage = "Player busts. Play again!"
        }
        setNumber (number + 1)
        // get total sum of player's cards
        setPCardsTotal (pCardsSum)


    }}

    function addDealerCard() {
        setNotDTurn (false)
        let pCardsSum = pCardsTotal
        let dCardsSum = dCardsTotal
        console.log(dCardsSum)
        let dealerNewHand = dCards
        let allCardsCopy = allCards
        // if dealer has less than 17, add a new card to dealer's hand
        if (dCardsSum < 17) {
            dealerNewHand.push(allCardsCopy.shift())
        console.log(dCardsSum)
        // if dealer has 17 or more, compare hands to see who wins
        dCardsSum += dealerNewHand[dealerNewHand.length-1].value
        } else if (pCardsSum > dCardsSum) {
            endOfGameMessage = "Player wins. Play again!"
        } else if (dCardsSum > pCardsSum) {
            endOfGameMessage = "Dealer wins. Play again!"
        } 
        // cards left in deck
        setAllCards (allCardsCopy)
        // dealer has 3 (or more) cards if dealer took hits
        setDCards (dealerNewHand)
        setNumber (number + 1)
        // get total sum of dealer's cards
        setDCardsTotal (dCardsSum)

    }

    // function gameOver() {
        
    // }

    let buttons
    if (gameActive) {
        buttons =  
        <div className="actionControls">
            <button className="hit" onClick={addPlayerCard}>Hit</button>
            <br></br>
            <button className="stand" onClick={addDealerCard}>Stand</button>
        </div>
       } else {buttons = <div className="actionControls"/>}
    
    return (
        <div>
            <div>
                <h3>Start your game!</h3>
                <button onClick={handleGameStart}>
                    Deal
                </button>

                {/* <div>
                    <img className="back" src="./assets/Back.jpeg" alt="card back" />
                </div> */}

            </div>
                <h3 className="dealer">Dealer</h3>

            <div>
            {dCards.map((card, index) => {
                return (
                    notDTurn && index === 0 ?
                    <img className="back" src="./assets/Back.jpeg" alt="card back" /> :
                    <img className="cards" src={card.source} key={card.source}></img>

                    // src={process.env.PUBLIC_URL + "/git.png"}
                    // src={process.env.PUBLIC_URL + "/git.png"}
                )
                }
                )
            }
            </div>
            {buttons}
            <div>
            {pCards.map(card => (
                    <img className="cards" src={card.source} key={card.source}></img>
                ))}
            </div>

            <h3 className="player">Player</h3>

            <div>
                <Attribute></Attribute>
            </div>

        </div>
      );
}

export default Blackjack;



                {/* <button className="split">Split</button> */}
                {/* <button className="double">Double Down</button> */}