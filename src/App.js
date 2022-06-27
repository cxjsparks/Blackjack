import React from "react"
import './App.css';
import { Link, Routes, Route } from "react-router-dom"
import About from "./Components.About"
import Blackjack from "./Components.Blackjack"
import Navbar from "./Components/Navbar"


function App() {



  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/About" element={ <About />} />
        <Route path="/Blackjack" element={ <Blackjack />} />
      </Routes>
  </div>
)
}


export default App;
