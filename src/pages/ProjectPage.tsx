import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './ProjectPage.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';

import MainProfitLost from '../assets/projects/PL/profit-lost.com.png';
import LogoProfitLost from '../assets/projects/PL/logoPL.svg';
import MainWP from '../assets/projects/WP/labarveria.com.png';
import LogoWP from '../assets/projects/WP/logoWordpress.svg';

import { FaReact, FaNodeJs, FaSass, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';

const projectImages: { [key: string]: string } = {
    ProfitLost: MainProfitLost,
    WP: MainWP,
};

const projectLogos: { [key: string]: string } = {
    ProfitLost: LogoProfitLost,
    WP: LogoWP,
};

const projectURLs: { [key: string]: string } = {
    ProfitLost: "https://profit-lost.com/",
    WP: "https://www.behance.net/gallery/180559835/WORDPRESS-WEBS",
};

const gitURLs: { [key: string]: string } = {
    ProfitLost: "https://github.com/brianglezn/PL-front-v2",
};

const projectTechnologies: { [key: string]: { name: string; icon: JSX.Element }[] } = {
    ProfitLost: [
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />
        },
        {
            name: "NodeJS",
            icon: <FaNodeJs />
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />
        },
        {
            name: "Express",
            icon: <SiExpress />
        },
        {
            name: "Sass",
            icon: <FaSass />
        }
    ],
    WP: [
        {
            name: "Wordpress",
            icon: <FaWordpress />
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
    const gitURL = gitURLs[normalizedProjectId];

    return (
        <>
            <LanguageSelector />
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
                                    <a href={gitURL} className='custom-button-sec' target="_blank" rel="noopener noreferrer">GitHub</a>
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
