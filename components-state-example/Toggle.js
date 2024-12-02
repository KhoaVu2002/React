import React, { useCallback, useState } from "react";

const Toggle = () =>{
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () =>{
        setIsOn(!isOn);
    };
    return(
        <div className={`toggle ${isOn ? 'on' : 'off'}`}>
            <img
            src={isOn ? 'https://freesvg.org/storage/img/thumb/1296215547.png' : 'https://freesvg.org/storage/img/thumb/bulb-clip-art-publicdomainvectors.png'}
            alt={isOn ? 'Light Off' : 'Light On'}
            className="image"
            />
            <button onClick={handleToggle} className="button">
                {isOn ? 'Turn On' : 'Turn Off'}
            </button>
        </div>
    )
};

export default Toggle;