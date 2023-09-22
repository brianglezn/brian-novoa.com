// import globalthermo from '../assets/projects/mockups/globalthermo.es.jpg';
/* <img src={globalthermo} /> */

import './Projects.css';

import projectsData from '../assets/projects/projects.json';

function Projects() {
    const projects = projectsData.map((project) => {

        return (
            <div className='projects__project' key={project.id} onClick={() => {
                const link = project.link;
                window.open(link, '_blank');
            }}>
                <img src={project.photo} alt={project.name} />
                <p>{project.name}</p>
                <span>{project.description}</span>
                <div className='projects__tech'>
                    {project.tec.map((tech) => (
                        <i key={tech} className={tech}></i>
                    ))}
                </div>
            </div>
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