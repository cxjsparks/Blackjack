import React from "react"
import './App.css';
import { Link, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import About from "./Components/About"
import Blackjack from "./Components/Blackjack"
import Navbar from "./Components/Navbar"
import cards from "./cards/cards"

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  return (
    <div className="App">
  


      <Navbar />
        <button className="play" onClick={shuffleCards}>Let's Play!</button>
      <Routes>
        <Route path="/Blackjack" element={ <Blackjack />} />
        <Route path="/About" element={ <About />} />
      </Routes>
    </div>
  )
}


export default App;
