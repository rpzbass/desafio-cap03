import React from 'react';
import './App.css';
import { Navbar } from './core/components/Navbar';
import { Home } from './pages/Home';

const  App =() => {
  return (
    <>  
        <Navbar/>
        <Home/>
    </>
  );
}

export default App;
