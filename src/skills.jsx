
import SkillBox from './skill-box.jsx';
import './App.css'
function Skills() {
    //const iconbrackets = <FontAwesomeIcon icon={faBracketsCurly} />
    return (  
        <div className="services">
            <div className="content-services">
                <h2>SERVICIOS</h2>
                <h1>Qué tecnologías manejo</h1>
                <p>Llevo muchos años trabajando tanto en desarrollo como en diseño, he realizado desde gráficos para programas de televisión como
                    proyectos de realidad y videojuegos, si hay algo que quiero dejar claro es que da igual lo que se ponga por delante. Lo voy a sacar adelante.
                </p>
            <div className='skill-boxes' >
                <SkillBox  title = "Web development" icon = 'icono1'  />
                <SkillBox  title = "Web development" icon = 'icono1'  />
                <SkillBox  title = "Web development" icon = 'icono1'  />
                <SkillBox  title = "Web development" icon = 'icono1'  />
            </div>
            </div>
            
        </div>
    );
}

export default Skills;