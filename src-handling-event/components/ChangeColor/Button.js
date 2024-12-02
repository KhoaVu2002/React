import React, { useState } from 'react';

function ButtonChange() {
  const [bgColor, setBgColor] = useState('red'); // Initial background color

  const toggleColor = () => {
    setBgColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={toggleColor} style={{ padding: '10px 20px', fontSize: '16px', color: 'white', backgroundColor: 'black', border: 'none', cursor: 'pointer' }}>
        Toggle Background Color
      </button>
    </div>
  );
}

export default ButtonChange;
