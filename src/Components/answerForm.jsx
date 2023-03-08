import React,{Component, useState} from "react";

const AnswerForm = ({question, answer, updateCurrentStreak, updateLongestStreak}) => {

    const [inputValue, setInputValue] = useState('');
    const [answerResult, setAnswerResult] = useState('')
    
    
    const checkGuess = (event) =>{
       if(answer.toUpperCase() == inputValue.toUpperCase()){
        setAnswerResult('correct');
        updateCurrentStreak(1)
        updateLongestStreak();
       }else{
        setAnswerResult('wrong');
        updateCurrentStreak(0)

       }
    }

    const updateInputValue = (event) => {
       let input = event.target.value;
       setInputValue(input);
    }
    return(
    <div className="answer-form">
        <form>
            <label>Guess your answer here: </label>
            <input type="text" onChange={updateInputValue} id={answerResult} placeholder="Plase enter your guess!"></input>
           
        </form>
        <button  className="button submit" 
            onClick={checkGuess}>
            Check Guess
        </button>

    </div>
    );
};


export default AnswerForm;

