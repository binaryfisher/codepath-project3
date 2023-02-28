import { useState } from 'react'

import './App.css'


function App() {
  const [cardContent, setCardContent] = useState("Let's start!")
  const[cardIndex, setCardIndex] = useState(0);
  const flashCards = [{question:"What is the DOM?", 
  answer:"The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. "},
  {question:"What is Javascript used for?", answer:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."},{question:"What are JavaScript Data Types?",answer:"Number,String,Boolean,Object,Undefined"},{question:" What is the use of isNaN function?",answer:"isNan function returns true if the argument is not a number; otherwise, it is false."},{question:"What is negative Infinity?",answer:"Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero."},{question:"Is it possible to break JavaScript Code into several lines?",answer:"Breaking within a string statement can be done by using a backslash, ‘\,’ at the end of the first line."},{question:" Which company developed JavaScript?",answer:"Netscape is the software company that developed JavaScript."},{question:" What is ‘this’ keyword in JavaScript?",answer:"‘This’ keyword refers to the object from where it was called."},{question:"What is === operator?",answer:"=== is called a strict equality operator, which returns true when the two operands have the same value without conversion."},{question:"What are all the looping structures in JavaScript?",answer:"For, While, Do-while"}]
  const CARDS_NUM = flashCards.length;
  const turnCards = () =>{
     rotateCard();
     if(cardContent == flashCards[cardIndex].answer){
      setCardContent(flashCards[cardIndex].question);
     }else{
      setCardContent(flashCards[cardIndex].answer);
     }
   
     
  }
  const rotateCard = () =>{
    document.querySelector(".card").classList.add(".flipped");
  }
  const prevCard = () =>{
    if(cardIndex >= 1){
      setCardIndex(cardIndex - 1);
      setCardContent(flashCards[cardIndex - 1].question)
     
    }else{
      setCardIndex(CARDS_NUM - 1);
      setCardContent(flashCards[CARDS_NUM - 1].question)
    }
  
    
    
  }

  const nextCard = () =>{
    if(cardIndex <= CARDS_NUM -2){
      setCardIndex(cardIndex + 1);
      setCardContent(flashCards[cardIndex + 1].question)
      
    }else{
      setCardIndex(0);
      setCardContent(flashCards[0].question)
    }
   
    
    
  }
  return (
    <div className="App">
      <div className='header'>
        <h1>Basic knowledge of Javascript!</h1>
        <h2>Test your proficency at Javascript</h2>
        <h4>Number of cards: {CARDS_NUM} </h4>
      </div> 

      <div className='card' onClick={turnCards}>
        <div className='card-content' >{cardContent}</div>
      </div>
      <div className='control-panel'>
        <button className='button' onClick={prevCard}>&lt;&nbsp; Prev</button>
        <button className='button' onClick={nextCard}>Next &nbsp;&gt;</button>
      </div>    
    </div>
    
  )
}

export default App
