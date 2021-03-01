import React from 'react';
import './App.css';
import { Navbar } from './core/components/Navbar';
//import { Home } from './pages/Home';
import { Search } from './pages/Search';

const  App =() => {
  return (
    <>  
        <Navbar/>
        <Search/>
    </>
  );
}

export default App;
