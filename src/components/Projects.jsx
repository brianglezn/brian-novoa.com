import './Projects.css';

import projectsData from '../assets/projects/projects.json';

function Projects() {
    const projects = projectsData.map((project) => {

        return (
            <a className='projects__project' href={project.link} target='_blank' key={project.id} rel="noreferrer">
                <img src={project.photo} alt={project.name} />
                <p>{project.name}</p>
                <span>{project.description}</span>
                <div className='projects__tech'>
                    {project.tec.map((tech) => (
                        <i key={tech} className={tech}></i>
                    ))}
                </div>
            </a>

        );
    });

    return (
        <>
            <h2 className='section__title' id='projects'>PROJECTS</h2>
            <section className='projects'>
                {projects}
            </section>
        </>
    );
}

export default Projects;