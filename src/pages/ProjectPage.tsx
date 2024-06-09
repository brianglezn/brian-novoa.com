import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './ProjectPage.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainProfitLost from '../assets/projects/PL/profit-lost.com.png';
import MainWP from '../assets/projects/WP/labarveria.com.png';
import MainELearning from '../assets/projects/eLearning/elearning.com.png';
import LogoProfitLost from '../assets/projects/PL/logoPL.svg';
import LogoWP from '../assets/projects/WP/logoWordpress.svg';
import logoElearning from '../assets/projects/eLearning/logoElearning.svg';
import IconReact from '../components/icons/IconReact';
import IconTypescript from '../components/icons/IconTypescript';
import IconNode from '../components/icons/IconNode';
import IconMongo from '../components/icons/IconMongo';
import IconExpress from '../components/icons/IconExpress';
import IconSass from '../components/icons/IconSass';
import IconWordpress from '../components/icons/IconWordpress';

const projectImages: { [key: string]: string } = {
    ProfitLost: MainProfitLost,
    WP: MainWP,
    ELearning: MainELearning,
};

const projectLogos: { [key: string]: string } = {
    ProfitLost: LogoProfitLost,
    WP: LogoWP,
    ELearning: logoElearning,
};

const projectURLs: { [key: string]: string } = {
    ProfitLost: "https://profit-lost.com/",
    WP: "https://www.behance.net/gallery/180559835/WORDPRESS-WEBS",
    ELearning: "https://elearning-frontend-r489.onrender.com/",
};

const projectTechnologies: { [key: string]: { name: string; icon: JSX.Element }[] } = {
    ProfitLost: [
        {
            name: "React",
            icon: <IconReact />
        },
        {
            name: "TypeScript",
            icon: <IconTypescript />
        },
        {
            name: "NodeJS",
            icon: <IconNode />
        },
        {
            name: "MongoDB",
            icon: <IconMongo />
        },
        {
            name: "Express",
            icon: <IconExpress />
        },
        {
            name: "Sass",
            icon: <IconSass />
        }
    ],
    WP: [
        {
            name: "Wordpress",
            icon: <IconWordpress />
        }
    ],
    ELearning: [
        {
            name: "React",
            icon: <IconReact />
        },
        {
            name: "TypeScript",
            icon: <IconTypescript />
        },
        {
            name: "NodeJS",
            icon: <IconNode />
        },
        {
            name: "MongoDB",
            icon: <IconMongo />
        },
        {
            name: "Sass",
            icon: <IconSass />
        }
    ],
}

export default function ProjectPage() {
    const { t } = useTranslation();
    const { projectId } = useParams<{ projectId: string }>();

    if (!projectId) {
        return (<></>);
    }

    const normalizedProjectId = projectId.charAt(0).toUpperCase() + projectId.slice(1);
    const projectImage = projectImages[normalizedProjectId];
    const projectLogo = projectLogos[normalizedProjectId];
    const projectURL = projectURLs[normalizedProjectId];

    return (
        <>
            <Header />
            <section className='projectsPage'>
                <main className='projectsPageMain'>
                    <div className='projectsPageMain-left'>
                        <div className='projectsPageMain-left--header'>
                            <img src={projectLogo} alt={t(`Projects.projectItems.${normalizedProjectId}.title`)} />
                            <h1>{t(`Projects.projectItems.${normalizedProjectId}.title`)}</h1>
                        </div>
                        <p>{t(`Projects.projectItems.${normalizedProjectId}.description2`)}</p>
                        <div>
                            <ul>
                                {projectTechnologies[normalizedProjectId].map((tech) => (
                                    <li key={tech.name}>
                                        <p>{tech.icon} {tech.name}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className='projectsPageMain-left--links'>
                                <a href={projectURL} className='custom-button' target="_blank" rel="noopener noreferrer">{t('Projects.visit')}</a>
                                {normalizedProjectId !== 'WP' && (
                                    <a href="https://github.com/brianglezn?tab=repositories" className='custom-button-sec' target="_blank" rel="noopener noreferrer">GitHub</a>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className='projectsPageMain-right'>
                        {projectImage && (
                            <img src={projectImage} alt={t(`Projects.projectItems.${normalizedProjectId}.title`)} />
                        )}
                    </div>
                </main>
            </section>
            <Footer />
        </>
    );
}
