import React, { useState } from "react";
import './InputChange.css';

const InputChange = () =>{
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    };
    return(
        <div className="input-change">
            <label htmlFor="inputField">Enter text:</label>
            <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            ></input>
            <p>Input Data: {inputValue}</p>
        </div>
    );
};

export default InputChange;