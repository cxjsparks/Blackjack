import React, { useState } from "react"
import CardDeckList from "./CardDeckList";
import Home from "./Home";
import Attribute from "./Attribute";


function Blackjack() {
    const [allCards, setAllCards] = useState(CardDeckList())
    const [pCards, setPCards] = useState([]) 
    const [dCards, setDCards] = useState([])
    const [shuffleDeck, setShuffleDeck] = useState([])
    const shuffleCards = () => {

    }
    const handleGameStart = () => {
        shuffleCards ()


        let allCardsCopy = [...allCards]
        // shift will take card from array
        let newPlayersCards = [allCardsCopy.shift()]

        let newDealersCards = [allCardsCopy.shift()]

        newPlayersCards.push(allCardsCopy.shift())

        newDealersCards.push(allCardsCopy.shift())

        setAllCards (allCardsCopy)

        setPCards (newPlayersCards)

        setDCards (newDealersCards)


    }

    // const shuffleDeck = () => {
    //     let shuffledDeck = [...cards, ...cards]
    //     .sort(() => Math.random())
    //     .map((card) => ({ ...card, id: Math.random() }))
    //     setCards(shuffledCards))
          
          


    return (
        <div>
            <div>
                <p>Start your game!</p>
                <button onClick={handleGameStart}>
                    Deal
                </button>
            </div>


            <h3>Dealer</h3>
            <div className="dealer">
                {dCards.map(card => (
                    <img className="cards" src={card} key={card}></img>
                ))}
            </div>

            <div className="actionControls">
                <button className="hit">Hit</button>
                <button className="stand">Stand</button>
                {/* <button className="split">Split</button> */}
                {/* <button className="double">Double Down</button> */}
            </div>

            <div className="player">
            {pCards.map(card => (
                    <img className="cards" src={card} key={card}></img>
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
 

