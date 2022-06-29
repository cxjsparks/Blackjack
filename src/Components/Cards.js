import React from "react"
import { Link } from "react-router-dom";

const Cards = () => {


    function cardDeck() {
        const deck = [
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs Ace.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 2.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 3.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 4.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 5.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 6.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 7.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 8.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 9.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs 10.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs J.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs Q.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Clubs K.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds Ace.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 2.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 3.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 4.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 5.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 6.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 7.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 8.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 9.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds 10.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds J.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds Q.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Diamonds K.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts Ace.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 2.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 3.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 4.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 5.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 6.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 7.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 8.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 9.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts 10.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts J.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts Q.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Hearts K.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades Ace.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 2.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 3.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 4.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 5.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 6.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 7.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 8.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 9.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades 10.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades J.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades Q.svg",
            "/Users/chloejager/sei/unit4/Project4-Blackjack/project4-blackjack/src/assets/Spades K.svg",
        ];
   
        const buildDeck = () => {
            for (let i = 2; i <= 10; i++)
                for (const deck of deck)
                    deck.push(i + deck);
    
    
            return  _.shuffle(deck);
        };
      
      function randomCard() {
        const random = Math.floor(Math.random() * 51);
        const card = document.createElement("div");
        document.body.appendChild(card);
      }
      const cards = cardDeck();
      randomCard(cards);

     
}}

export default Cards;