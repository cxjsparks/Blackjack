import React from "react"
import './App.css';
import { Link, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import About from "./Components/About"
import Blackjack from "./Components/Blackjack"
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Attribute from "./Components/Attribute"


function App() {
  const [cards, setCards] = useState([])


  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cards, ...cards]
      .sort(() => Math.random())
      .map((card) => ({ ...card, id: Math.random() }))
      setCards(shuffledCards)
 
  }

  


  return (
    <div className="App">



      <Navbar />
        <button className="play" onClick={shuffleCards}>Let's Play!</button>

        <div className="grid">
          {cards.map(card => (
            <div className="card" key={card.id}>
              <div>
                <img className="face" src={card.src} alt="front of card" />
                <img className="back" src="/assets/Back.jpeg" alt="back of card" />
              </div>
            </div>
          ))}
        </div>

      <Routes>
        <Route path="/Blackjack" element={ <Blackjack />} />
        <Route path="/About" element={ <About />} />
      </Routes>
      <Cards></Cards>
      <Attribute></Attribute>



    {/* <img src={require("./assets/Clubs.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Spades.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Hearts.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Diamonds.svg").default} height="125" width="" style={{"dropShadow": "25px 25px 25px #ffffff"}}></img> */}
    
    
    </div>
  )
}


export default App;
