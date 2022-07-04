import React from "react"
import './App.css';
import { Link, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
// import image from './img//Back.jpeg'
import About from "./Components/About"
import Navbar from "./Components/Navbar"
import Blackjack from "./Components/Blackjack"
import Home from "./Components/Home"


function App() {

  const [number, setNumber] = useState(0)


  return (
    <div className="App">
      {/* <div style={{ backgroundImage: `url(${image})` }}></div> */}



      <Navbar />



        <Routes>

          <Route path="/home" element={ <Home />} />
          <Route path="/blackjack" element={ <Blackjack number={number} setNumber={setNumber} />} />
          <Route path="/about" element={ <About />} />
          {/* <Route path="/Table" element={ <Table />} /> */}

        </Routes>
    
    
    </div>
  )
}


export default App;


    {/* <img src={require("./assets/Clubs.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Spades.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Hearts.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Diamonds.svg").default} height="125" width="" style={{"dropShadow": "25px 25px 25px #ffffff"}}></img> */}