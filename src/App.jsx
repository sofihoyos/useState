import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import { DarkModeToggle } from './components/UI/DarkModeToggle/DarkModeToggle';
import { ColorPicker } from './components/UI/ColorPicker/ColorPicker';
import { CounterLikeDislike } from './components/UI/CounterLikeDislike/CounterLikeDislike';
import { Timer } from './components/UI/Timer/Timer';


export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorMessage, setColorMessage] = useState("");

  const toggleMode = () => setIsDarkMode(prev => !prev);
  const handleLike = () => setLikes(prev => prev + 1);
  const handleDislike = () => setDislikes(prev => prev + 1);
  const startTimer = () => setIsTimerRunning(true);
  const stopTimer = () => {
    setIsTimerRunning(false);
    setSeconds(0);
  };
  
  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`} 
         style={{ backgroundColor: selectedColor || (isDarkMode ? '#333' : '#f4f4f4'), minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: selectedColor === 'black' ? 'white' : 'black' }}>Multi-Feature React App</h1>
      
      <div className='container-card'>
        <DarkModeToggle isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <CounterLikeDislike likes={likes} dislikes={dislikes} handleLike={handleLike} handleDislike={handleDislike} />
        <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} colorMessage={colorMessage} setColorMessage={setColorMessage} />
        <Timer seconds={seconds} setSeconds={setSeconds} isTimerRunning={isTimerRunning} setIsTimerRunning={setIsTimerRunning} />
      </div>
    </div>
  );
}
