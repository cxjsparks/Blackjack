import React from "react"
import { Link } from "react-router-dom"


const About = () => {
    return (
        <div>
            <div className="about">
                <h2>Hi! I'm Chloe.</h2>
                <p>After too many years as a receptionist in a law firm, I decided it was time to make myself uncomfortable. How best to do that? Jump into tech!</p>
                <p>It's been challenging, probably the hardest thing I've ever done career-wise. I cried and laughed, and most importantly, I found a great community of which to be a part.</p>
                <p>For my final GA project, I chose to create a React Blackjack app, despite being most frustrated and uncomfortable with that language. I decided I needed the challenge.</p>
            </div>

            <ul className="play">
                <Link style={{textDecoration: "none", color: "black" }} to="/blackjack">Click to Play!</Link>
                <br></br>
                <br></br>
                {/* <Link to="/https://www.linkedin.com/in/chloe-jager/">LinkedIn</Link> */}
                <a href="/https://www.linkedin.com/in/chloe-jager/">LinkedIn</a>
                <br></br>
                <a href="mailto:cxjmeister@gmail.com">Contact Me</a>
            </ul>


        </div>
    )  
     
}

export default About;