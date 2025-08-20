import React, { useEffect, useState } from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Project = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/rashmikumari123/portfolio-api/refs/heads/main/db.json')
    .then((response) => response.json())
    .then((data) => setProjects(data.projects))
    .catch((error) => console.log('error fetching data:', error));
  }, []);

  return (
    <div  id = 'project' className='project'>
        <div className="project-title">
                 <h1>My Projects</h1>
                 <img src = {theme_pattern} alt =""/>
        </div>

        <div className="project-container">
         {projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} width = "80%" height= "80%"  />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Tech Stack: {project.tech_stack.join(', ')}</p>

               {project.link && project.link.trim() !== "" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}

            {project.github && project.github.trim() !== "" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
            )}

          </div>
        ))
      )}  
            
        </div>
    </div>
  )
}


export default Project

