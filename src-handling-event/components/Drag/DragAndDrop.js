import React, { useState } from 'react';
import './DragAndDrop.css';

const DragAndDrop = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', 'Dragging');
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Allow drop
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const newX = e.clientX;
        const newY = e.clientY;
        setPosition({ x: newX, y: newY });
        console.log('New position: ', newX, newY);
    };

    return (
        <div>
            {/* Draggable element */}
            <div
                className="draggable-element"
                draggable="true"
                onDragStart={handleDragStart}
                style={{
                    position: 'absolute',
                    top: position.y,
                    left: position.x,
                }}
            >
                Drag me!
            </div>

            {/* Drop area */}
            <div
                className="drop-area"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{
                    width: '100%',
                    height: '300px',
                    border: '2px dashed gray',
                    marginTop: '20px',
                }}
            >
                Drop here!
            </div>
        </div>
    );
};

export default DragAndDrop;
