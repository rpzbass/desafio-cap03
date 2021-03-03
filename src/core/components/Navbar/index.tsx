import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
//import { Link } from 'react-router-dom';


export const Navbar = () => (

    <nav className="main-nav">
        <div>
                <Link to="/" className="hiperlink" >
                     <h4 className="main-home">Bootcamp DevSuperior</h4>    
                </Link>
        </div>         

    </nav>

);