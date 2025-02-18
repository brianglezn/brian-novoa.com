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
// import MainCalenbry from '../assets/projects/calenbry/calenbry.com.png';
// import logoCalenbry from '../assets/projects/calenbry/logoCalenbry.png';
// import MainTHCR from '../assets/projects/TalentControlHR/talentControlHR.brian-novoa.com.png';
// import logoTHCR from '../assets/projects/TalentControlHR/logoTCHR.png';

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
    // TalentControlHR: MainTHCR,
    // Calenbry: MainCalenbry,
};

const projectLogos: { [key: string]: string } = {
    ProfitLost: LogoProfitLost,
    WP: LogoWP,
    // TalentControlHR: logoTHCR,
    // Calenbry: logoCalenbry,
};

const projectURLs: { [key: string]: string } = {
    ProfitLost: "https://profit-lost.com/",
    WP: "https://www.behance.net/gallery/180559835/WORDPRESS-WEBS",
    // TalentControlHR: "https://talentcontrolhr.brian-novoa.com/",
    // Calenbry: "https://calenbry-frontend.onrender.com/",
};

const gitURLs: { [key: string]: string } = {
    ProfitLost: "https://github.com/brianglezn/PL-front-v2",
    // TalentControlHR: "https://github.com/brianglezn/TalentControlHR_frontend",
    // Calenbry: "https://github.com/brianglezn/calenbry_Frontend",
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
    // TalentControlHR: [
    //     {
    //         name: "React",
    //         icon: <IconReact />
    //     },
    //     {
    //         name: "TypeScript",
    //         icon: <IconTypescript />
    //     },
    //     {
    //         name: "NodeJS",
    //         icon: <IconNode />
    //     },
    //     {
    //         name: "MongoDB",
    //         icon: <IconMongo />
    //     },
    //     {
    //         name: "Express",
    //         icon: <IconExpress />
    //     },
    //     {
    //         name: "Sass",
    //         icon: <IconSass />
    //     }
    // ],
    // Calenbry: [
    //     {
    //         name: "React",
    //         icon: <IconReact />
    //     },
    //     {
    //         name: "TypeScript",
    //         icon: <IconTypescript />
    //     },
    //     {
    //         name: "NodeJS",
    //         icon: <IconNode />
    //     },
    //     {
    //         name: "MongoDB",
    //         icon: <IconMongo />
    //     },
    //     {
    //         name: "Sass",
    //         icon: <IconSass />
    //     }
    // ]
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
