import React from 'react';

export const DarkModeToggle = ({ isDarkMode, toggleMode }) => {
  return (
    <div className={`section ${isDarkMode ? 'dark-section' : 'light-section'}`}>
      <h2>Dark/Light Mode</h2>
      <button onClick={toggleMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};