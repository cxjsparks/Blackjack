import React from "react"
import { Link } from "react-router-dom"


const Home = ()=> {
    return (
        <div>
            <h1>Welcome to CJ's Game of Blackjack!</h1>
            <br />
            <h3>If you've never played or are a beginner, here are some general guidelines for standing or hitting, based on what the dealer and you are showing.</h3>
            <ul className="play">
                <Link className="link" style={{textDecoration: "none", color: "red" }} to="/blackjack">Let's Play!</Link>
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