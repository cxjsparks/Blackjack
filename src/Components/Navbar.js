import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="nav-links">
                    <Link to="/About"  style={{textDecoration: "none"}}><li>About</li></Link>
                    <Link to="/Blackjack"  style={{textDecoration: "none"}}><li>Blackjack</li></Link>
                </ul>
            </nav>
        </div>
    )  
     
}

export default Navbar;
