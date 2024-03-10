import { useTranslation } from 'react-i18next';

import './Projects.css';

const projectsData = [
    {
        "id": 1,
        "name": "Profit & Lost",
        "photo": "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710071745/brian-novoa.com/Projects/profit-lost/profit_lost.png",
        "description": "project1Description",
        "tec": [
            "fa-brands fa-react",
            "fa-brands fa-node-js",
            "fa-solid fa-database"
        ],
        "link": "https://brian-novoa.com/project/profit-lost"
    },
    {
        "id": 2,
        "name": "Wordpress Webs",
        "photo": "https://res.cloudinary.com/dz0mwxb0v/image/upload/v1710071865/brian-novoa.com/Projects/Wordpress/labarveria.com.png",
        "description": "project2Description",
        "tec": ["fa-brands fa-wordpress-simple"],
        "link": "https://brian-novoa.com/project/wordpress_webs"
    }
];

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