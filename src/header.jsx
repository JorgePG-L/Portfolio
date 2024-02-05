import React from 'react';
import './App.css'


function header() {
    return ( <>
    <header className='header'>
        <div className="home">
            <h1 className='name_h' >JP</h1>
        </div>
        <div className="sections">
            <h3>About me</h3>
            <h3>Projects</h3>
            <h3>Contact</h3>
        </div>
    
        </header>
    
    </> );
}

export default header;