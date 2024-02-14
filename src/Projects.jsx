import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const projectsData = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      imageUrl: "ruta/a/la/imagen1.jpg",
      url: "https://url-del-proyecto1.com",
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      imageUrl: "ruta/a/la/imagen2.jpg",
      url: "https://url-del-proyecto2.com",
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 2.",
      imageUrl: "ruta/a/la/imagen2.jpg",
      url: "https://url-del-proyecto2.com",
    },
    {
      title: "Proyecto 4",
      description: "Descripción del proyecto 2.",
      imageUrl: "ruta/a/la/imagen2.jpg",
      url: "https://url-del-proyecto2.com",
    },
    
  ];
  return (
    <div className="projects">
      <div className="projects-content">
        <h2>Proyectos</h2>
        <h1>Últimos proyectos</h1>
        <p>
          Estos son los últimos proyectos en los que he trabajdo o sigo
          trabajando.
        </p>

        <div className="projects-links">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
        {modalOpen && selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <a href={selectedProject.url}>Ver más</a>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
