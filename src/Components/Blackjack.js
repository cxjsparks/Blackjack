import React, { useState } from "react"
import CardDeckList from "./CardDeckList";
import Attribute from "./Attribute";


function Blackjack() {
    const [allCards, setAllCards] = useState(CardDeckList())
    const [pCards, setPCards] = useState([]) 
    const [dCards, setDCards] = useState([])
    const [shuffledDeck, setShuffledDeck] = useState([])
          

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
        let shuffledCards = shuffleDeck(allCards)
        if (allCards.length < 15) {
            shuffledCards = shuffleDeck(CardDeckList())
        }
        let allCardsCopy = [...shuffledCards]
        // shift to remove one card from all cards, give one to player
        let newPlayersCards = [allCardsCopy.shift()]
       // shift to remove one card from all cards, give one to dealer
        let newDealersCards = [allCardsCopy.shift()]
        // shift to remove one card from all cards, give second card to player
        newPlayersCards.push(allCardsCopy.shift())
        // shift to remove one card from all cards, give second one to dealer
        newDealersCards.push(allCardsCopy.shift())
        // 48 cards left in deck
        setAllCards (allCardsCopy)
        // player has 2 cards
        setPCards (newPlayersCards)
        // dealer has 2 cards
        setDCards (newDealersCards)
    }


    return (
        <div>
            <div>
                <p>Start your game!</p>
                <button onClick={handleGameStart}>
                {/* <button onClick={()=> {handleGameStart(); {shuffleDeck()}}}> */}
                    Deal
                </button>
            </div>

            <h3>Dealer</h3>

            <div className="dealer">
                {dCards.map(card => (
                    <img className="cards" src={card.source} key={card.source}></img>
                ))}
            </div>

            <div className="actionControls">
                {/* on click, add a card to player's cards */}
                <button className="hit">Hit</button>
                {/* on click, show dealer's cards */}
                <button className="stand">Stand</button>
                {/* <button className="split">Split</button> */}
                {/* <button className="double">Double Down</button> */}
            </div>

            <div className="player">
            {pCards.map(card => (
                    <img className="cards" src={card.source} key={card.source}></img>
                ))}
            </div>

            <h3>Player</h3>

            <div>
                <Attribute></Attribute>
            </div>

        </div>
      );
}

export default Blackjack;

// const  = () => {



           
            
          
          
          
    // let cardDeck = deck.map((item) => {
    //           // move to table and map over dealersCard and playersCard to display state as images
    //     return (
    //         <div>
    //             <img className="card" src={item} />
    //         </div>)
                 
    //         })
          
    //     return (
          
    //         <div>
    //             {cardDeck.map((item) => {
    //                 return item
    //             })}
    //         </div>
        // )
    //     <div className="grid">
    //     {cardDeck.map(card => (
    //       <div className="card" key={card.id}>
    //         <div>
    //           <img className="face" src={card.src} alt="front of card" />
    //           <img className="back" src="/assets/Back.jpeg" alt="back of card" />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //  }
     
// }
 

        // const shuffleDeck = () => {
        //     const shuffledDeck = [...CardList, ...CardList]
        //     .sort(() => 
        //         Math.random())
        //         .map((allCards) => ({ ...CardList, id: Math.random() }),

        //         setAllCards(shuffledDeck)

        //     )