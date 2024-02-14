import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  const handleClick = () => {
    onClick(project);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={project.imageUrl} alt={project.title} />
      
      
    </div>
  );
};

export default ProjectCard;
