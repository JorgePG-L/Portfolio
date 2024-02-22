import './App.css'

function SkillBox( {icon, title}) {
    return ( 
        <div className="skillbox" >
            
            <div className='skill-icon'><i className={icon}  ></i></div>
            <div className='skill-title'>{title}</div>
            
        </div>
     );
}

export default SkillBox;