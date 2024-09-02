// src/App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <div className='container'>
        <Home />
        <ThemeToggle />
      </div>

    </ThemeProvider>
  );
}

export default App;
