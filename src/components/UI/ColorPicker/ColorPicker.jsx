import React from 'react';

const coloresAbsolutos = [
  "red", "green", "blue", "yellow", "magenta", "cyan", "black", "white", 
  "gray", "brown", "olive", "purple", "teal", "silver", "orange", "maroon"
];

export const ColorPicker = ({ selectedColor, setSelectedColor, colorMessage, setColorMessage }) => {
  const generateColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setSelectedColor(randomColor);
    setColorMessage(`El color cambió a: ${randomColor}`);
  };

  return (
    <div className={`section`}>
      <h2>Color Picker</h2>
      {colorMessage && <p>{colorMessage}</p>}
      <button onClick={generateColor}>Generate Color</button>
      {selectedColor && (
        <div className="color-box" style={{ backgroundColor: selectedColor }} />
      )}
    </div>
  );
};

