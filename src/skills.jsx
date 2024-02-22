
import SkillBox from './skill-box.jsx';
import './App.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGear } from '@fortawesome/free-solid-svg-icons'
function Skills() {
    //const iconbrackets = <FontAwesomeIcon icon={faBracketsCurly} />
    return (  
        <div className="services">
            <div className="content-services">
                <h2>SERVICIOS</h2>
                <h1>Qué tecnologías manejo</h1>
                <p>Llevo muchos años trabajando tanto en desarrollo como en diseño, he realizado desde gráficos para programas de televisión como
                    proyectos de realidad y videojuegos.
                </p>
            <div className='skill-boxes' >
                <SkillBox  title = "Web development" icon = "fa-solid fa-laptop-code"  />
                <SkillBox  title = "Design" icon = 'fa-solid fa-pen-nib'  />
                <SkillBox  title = "User Experience" icon = 'fa-solid fa-sitemap'  />
                <SkillBox  title = "Videogames" icon = 'fa-solid fa-gamepad'  />
            </div>
            </div>
            
        </div>
    );
}

export default Skills;