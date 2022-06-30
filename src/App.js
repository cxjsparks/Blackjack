import React from "react"
import './App.css';
import { Link, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import About from "./Components/About"
import Blackjack from "./Components/Blackjack"
import Navbar from "./Components/Navbar"
import Cards from "./Components/CardDeckList"
import Attribute from "./Components/Attribute"
import Table from "./Components/Table"
import Home from "./Components/Home"


function App() {


  


  return (
    <div className="App">



      <Navbar />
        {/* <Link className="play" onClick={play}>Let's Play!</Link> */}



      <Routes>
        <Route path="/Home" element={ <Home />} />
        <Route path="/Blackjack" element={ <Blackjack />} />
        <Route path="/About" element={ <About />} />
      </Routes>
      <Cards></Cards>
      <Attribute></Attribute>




    
    
    </div>
  )
}


export default App;


    {/* <img src={require("./assets/Clubs.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Spades.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Hearts.svg").default} height="125" width="" style={{"dropShadow": "5px 5px 5px #ffffff"}}></img>
    <img src={require("./assets/Diamonds.svg").default} height="125" width="" style={{"dropShadow": "25px 25px 25px #ffffff"}}></img> */}