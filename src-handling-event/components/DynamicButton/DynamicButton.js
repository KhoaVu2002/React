import React, {useState} from 'react';
import './DynamicButton.css';

const DynamicButton = () => {
    const [buttonState, setButtonState] = useState(false);
   
    const handleClick = () => {
      setButtonState(!buttonState);
    };
   
    return (
      <div>
        <button onClick={handleClick} className={buttonState ? 'active' : ''}>
          {buttonState ? 'Clicked!' : 'Click me'}
        </button>
      </div>
    );
  };
   
  export default DynamicButton;