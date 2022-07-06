import React from "react"
import { Link } from "react-router-dom"


const Home = ()=> {
    return (
        <div className="home">
            <h3>Welcome to CJ's Game of Blackjack!</h3>
            <h4>If you've never played or are a beginner, here are some general guidelines for standing or hitting, based on what the dealer and you are showing.</h4>
            <h4> Attempt to beat the dealer by getting a count as close to 21 as possible, without going over. Aces are worth 1 or 11, and facecards (Jacks, Queens and Kings) are worth 10. Once the player and dealer have 2 cards (dealer's first card is face down), player can hit or stand based on their own cards. Once player stands, dealer must hit if hand is less than 17. Whoever has the higher hand wins. If either has blackjack on deal, that hand wins. If both have blackjack, it's a push (tie).</h4>

            <ul className="play">
                <Link style={{textDecoration: "none", color: "black" }} to="/blackjack">Click to Play!</Link>
            </ul>

        </div>
    )
}

{/* <div>
<nav className="nav">
    <ul className="nav-links">
        <Link to="/Home"  style={{textDecoration: "none"}}><li>Home</li></Link>
        <Link to="/Table"  x><li>Blackjack</li></Link>
        <Link to="/About"  style={{textDecoration: "none"}}><li>About</li></Link>
    </ul>
</nav>
</div> */}

 
export default Home;

// const Home = () => {
//     const navigate = useNavigate();
//     navigate("/Table");




//     return ( 
//         <div className="home">
//         <h2>Welcome to CJ's Blackjack Table!</h2>
//         <br></br>
//         <button onClick={navigateToTable}>Click to begin play.</button>
//         <h3></h3>

//         <Routes>
//             <Route path="/Table" element={<Table />} />
//         </Routes>

//     </div>
//      );
// }