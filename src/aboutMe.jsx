import React from 'react';
import image_01 from '../public/Jorge_Pose.png'
import './App.css'

function AboutMe() {
    return ( 
        <div className='AboutMe'>
            <div className="content">
                <div className="left">
                    <h1>Jorge Piqueras</h1>
                </div>
                <div className="center">
                    <img src={image_01} alt="Jorge_Pose" className="image" />
                </div>
                <div className="right">
                    <p>Texto a la derecha</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;