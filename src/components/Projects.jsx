import { useTranslation } from 'react-i18next';

import './Projects.css';
import projectsData from '../assets/projects/projects.json';

function Projects() {
    const { t } = useTranslation();

    const projects = projectsData.map((project) => {

        return (
            <a className='projects__project' href={project.link} key={project.id}>
                <img src={project.photo} alt={project.name} />
                <p>{project.name}</p>
                <span>{t(project.description)}</span>
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
            <h2 className='section__title' id='projects'>{t('title-projects')}</h2>
            <section className='projects'>
                {projects}
            </section>
        </>
    );
}

export default Projects;