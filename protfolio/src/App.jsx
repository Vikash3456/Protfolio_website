import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
