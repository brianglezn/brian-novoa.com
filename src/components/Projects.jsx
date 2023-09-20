import './Projects.css';

import projectsData from '../assets/projects/projects.json';

function Projects() {
    const projects = projectsData.map((project) => {
        return (
            <div className='project' key={project.id} onClick={() => {
                const link = project.link;
                window.open(link, '_blank');
            }}>
                <img src={project.photo} alt={project.name} />
                <p>{project.name}</p>
                <div className='tech'>
                    {project.tec.map((tech) => (
                        <i key={tech} className={tech}></i>
                    ))}
                </div>
            </div>
        );
    });

    return (
        <section className='projects' id='projects'>
            {projects}
        </section>
    );
}

export default Projects;



/* 
import globalthermo from '../assets/projects/mockups/web-wordpress/globalthermo.es.jpg';

<section className='projects' id='projects'>
<div className='project' id=''>
    <img src={globalthermo} />
    <p>Global Thermo</p>
    <i className='fa-brands fa-wordpress-simple'></i>
</div>
</section> 
*/