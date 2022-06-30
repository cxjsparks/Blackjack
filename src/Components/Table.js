import React from "react"


function Table() {
    const [table, setTable] = useState()
    return (
        <div>
            <p>Start your game!</p>
            <button onClick={() => setTable(CardDeckList)}>
                Deal
            </button>
        </div>


      );
}
 
export default Table;

// const  = () => {

//     const CardDeckList = () => {
//         const [cardDeckList, setCardDeckList] = useState([])
          
          
            //shuffle cards
          //   const shuffleCards = () => {
          //     const shuffledCards = [...cards, ...cards]
          //       .sort(() => Math.random())
          //       .map((card) => ({ ...card, id: Math.random() }))
          //       setCards(shuffledCards)
           
          //   }
          
          
          
    // let cardDeck = deck.map((item) => {
    //           // move to table and map over dealersCard and playersCard to display state as images
    //     return (
    //         <div>
    //             <img className="card" src={item} />
    //         </div>)
                 
    //         })
          
    //     return (
          
    //         <div>
    //             {cardDeck.map((item) => {
    //                 return item
    //             })}
    //         </div>
        // )
    //     <div className="grid">
    //     {cardDeck.map(card => (
    //       <div className="card" key={card.id}>
    //         <div>
    //           <img className="face" src={card.src} alt="front of card" />
    //           <img className="back" src="/assets/Back.jpeg" alt="back of card" />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //  }
     
// }
 

