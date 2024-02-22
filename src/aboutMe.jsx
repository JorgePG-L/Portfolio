import React from 'react';
import image_01 from './assets/Jorge_Pose.png'
import './App.css'

function AboutMe() {
    return ( 
        <div className='AboutMe'>
            <div className="content">
                <div className="left">
                    <h1>Jorge Piqueras</h1>
                    <p>Soy un Full Stack Developer con experiencia en el diseño y desarrollo de videojuegos.</p>
                </div>
                
                <div className="center">
                    <img src={image_01} alt="Jorge_Pose" className="image" />
                </div>
                <div className="right">
                    
                    <p>  *Si hay algo que quiero dejar claro es que da igual lo que se ponga por delante. Lo voy a sacar adelante. </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;