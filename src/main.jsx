import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import AboutMe from './aboutMe.jsx'
import Skills from './skills.jsx'
import Projects from './Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <Skills />
    <Projects />
  </React.StrictMode>,
)
