import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () =>{
    const [colors] = useState([
        {name: 'Red', code: '#FF0000'},
        {name: 'Green', code: '#00FF00'},
        {name: 'Blue', code: '#0000FF'},
        {name: 'Yellow', code: '#FFFF00'},
        {name: 'Purple', code: '#800080'},
    ]);

    const [selectColor, setSelectColor] = useState(colors[0]);

    const handleColorSelect = (c) =>{
        setSelectColor(c);
    };
    return (
        <div className="color-picker">
          <h2>Color Picker</h2>
          <div className="color-box">
            {colors.map((c, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: c.name }}
                onClick={() => handleColorSelect(c)}
              ></div>
            ))}
          </div>
          <p
          style={{color: selectColor.name}}
          >Selected Color: {selectColor.name}</p>
        </div>
    )
};

export default ColorPicker;