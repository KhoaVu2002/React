import React, { useState } from "react";
import './Questions.css';

const Questions = ({question, options, correctAnswer, onAnswer}) =>{
    const[selectedOption, setSelectedOption] = useState(0);
    const handleOptionSelect = (op) =>{
        setSelectedOption(op)
    };

    const handleSubmit = () =>{
        const isCorrect = selectedOption === correctAnswer;
        onAnswer(isCorrect);
        setSelectedOption(null);
    };
    
    return(
        <div className="question">
            <h3>{question}</h3>
            <ul>
                {options.map((op, i) =>(
                    <li key={i}
                    className={selectedOption === options ? 'selected': ''}
                    onClick={() =>handleOptionSelect(op)}
                    >
                        {op}
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit} disabled={!selectedOption}>Submit</button>
        </div>
    )
}

export default Questions;