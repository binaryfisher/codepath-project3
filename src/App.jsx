import { useState } from 'react'
import './App.css'
import flashCardsJason from './cards.json'
import AnswerForm from './Components/answerForm'

function App() {
  const[cardContent, setCardContent] = useState("Let's start!")
  const[cardIndex, setCardIndex] = useState(0);
  const[classList, setClassList] = useState("card")
  const[flashCards, setFlashCards] = useState(flashCardsJason.cards);
  const[currentStreak, setCurrentStreak] = useState(0);
  const[longestStreak, setLongestStreak] = useState(0);
 
 
  
  const CARDS_NUM = flashCards.length - 1;
  const turnCards = () =>{
        
      if(classList == "card"){
        setClassList(classList + " flipped")
      }
      if(classList == "card flipped"){
        setClassList("card")
      }
        
     if(cardContent == flashCards[cardIndex].answer){
      setCardContent(flashCards[cardIndex].question);
     }else{
      setCardContent(flashCards[cardIndex].answer);
     }
        
  }

  
  const nextCard = () =>{
    let index = 0;
     if(cardIndex < 10){
        index = cardIndex + 1;     
     }else{
      index =  1;
     }
      setCardIndex(index);
      setCardContent(flashCards[index].question)          
  }

  const prevCard = () =>{
    let index = 0;
    if(cardIndex > 1){    
     index = cardIndex - 1; 
    }else{
     index =  10;
    }
    setCardIndex(index);
    setCardContent(flashCards[index].question)
         
 }

 const shuffleCards = () =>{
  const greeting = flashCards.shift();
  let currentIndex = flashCards.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [flashCards[currentIndex], flashCards[randomIndex]] = [
      flashCards[randomIndex], flashCards[currentIndex]];
  }

  flashCards.unshift(greeting);

 }


  return (
    <div className="App">
      <div className='header'>
        <h1>Basic knowledge of Javascript!</h1>
        <h2>Test your proficency at Javascript</h2>
        <h4>Number of cards: {CARDS_NUM} </h4>
        <h4>Current Streak: {currentStreak}&nbsp;&nbsp;&nbsp; Longest Streak: {longestStreak}</h4>
      </div> 

      <div className={classList} id={flashCards[cardIndex].diffculty }  onClick={turnCards}>
        <p className="card-content" >{cardContent }</p>
      </div>
      <AnswerForm question="hello" answer="hehhe"/>
      <div className='control-panel'>
      <button className='button' onClick={prevCard}>&nbsp;&lt; Prev</button>
      <button className='button' onClick={shuffleCards}>Shuffle</button>
      <button className='button' onClick={nextCard}>Next &nbsp;&gt;</button>
        
      </div>    
    </div>
    
  )
}

export default App
