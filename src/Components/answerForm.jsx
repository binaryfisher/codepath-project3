import React,{Component, useState} from "react";

const AnswerForm = ({question, answer}) => {

    const [inputValue, setInputValue] = useState('');

    const checkGuess = (event) =>{
        alert(inputValue);
    }

    const updateInputValue = (event) => {
       let input = event.target.value;
       setInputValue(input);
    }
    return(
    <div>
        <form>
            <label>Guess your answer here:</label>
            <input type="text" onChange={updateInputValue}></input>
            <button type="submit" className="button submit" 
            onClick={checkGuess}>
            Check Guess
            </button>

        </form>
        

    </div>
    );
};


export default AnswerForm;

