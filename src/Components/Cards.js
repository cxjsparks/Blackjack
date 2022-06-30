import React from "react"
import { Link } from "react-router-dom";



const Cards = () => {



        const deck = [
            "/assets/Clubs Ace.svg",
            "/assets/Clubs 2.svg",
            "/assets/Clubs 3.svg",
            "/assets/Clubs 4.svg",
            "/assets/Clubs 5.svg",
            "/assets/Clubs 6.svg",
            "/assets/Clubs 7.svg",
            "/assets/Clubs 8.svg",
            "/assets/Clubs 9.svg",
            "/assets/Clubs 10.svg",
            "/assets/Clubs J.svg",
            "/assets/Clubs Q.svg",
            "/assets/Clubs K.svg",
            "/assets/Diamonds Ace.svg",
            "/assets/Diamonds 2.svg",
            "/assets/Diamonds 3.svg",
            "/assets/Diamonds 4.svg",
            "/assets/Diamonds 5.svg",
            "/assets/Diamonds 6.svg",
            "/assets/Diamonds 7.svg",
            "/assets/Diamonds 8.svg",
            "/assets/Diamonds 9.svg",
            "/assets/Diamonds 10.svg",
            "/assets/Diamonds J.svg",
            "/assets/Diamonds Q.svg",
            "/assets/Diamonds K.svg",
            "/assets/Hearts Ace.svg",
            "/assets/Hearts 2.svg",
            "/assets/Hearts 3.svg",
            "/assets/Hearts 4.svg",
            "/assets/Hearts 5.svg",
            "/assets/Hearts 6.svg",
            "/assets/Hearts 7.svg",
            "/assets/Hearts 8.svg",
            "/assets/Hearts 9.svg",
            "/assets/Hearts 10.svg",
            "/assets/Hearts J.svg",
            "/assets/Hearts Q.svg",
            "/assets/Hearts K.svg",
            "/assets/Spades Ace.svg",
            "/assets/Spades 2.svg",
            "/assets/Spades 3.svg",
            "/assets/Spades 4.svg",
            "/assets/Spades 5.svg",
            "/assets/Spades 6.svg",
            "/assets/Spades 7.svg",
            "/assets/Spades 8.svg",
            "/assets/Spades 9.svg",
            "/assets/Spades 10.svg",
            "/assets/Spades J.svg",
            "/assets/Spades Q.svg",
            "/assets/Spades K.svg",
        ];

        
    let cardDeck = deck.map((item) => {
        return (
            <div>
                <img className="card" src={item} />
            </div>)
           
        })

        return (
  
            <div>
                {cardDeck.map((item) => {
                return item
                })}
            </div>
    )

    
}

export default Cards;

      
// const buildDeck = () => {
//     for (let i = 2; i <= 10; i++)
//         for (const deck of deck)
//             deck.push(i + deck);


//     // return  _.shuffle(deck);
// };

// function randomCard() {
//     const random = Math.floor(Math.random() * 51);
//     const card = document.createElement("div");
//     document.body.appendChild(card);
//   }
//   const cards = cardDeck();
//   randomCard(cards);