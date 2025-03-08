import { useTranslation } from 'react-i18next';

import './Home.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';

import ProjectItem from '../components/ProjectItem';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import brianHome from '../assets/img/brian_home.jpg';
import logoPL from '../assets/projects/PL/logoPL.svg';
import logoWordpress from '../assets/projects/WP/logoWordpress.svg';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <LanguageSelector />
            <Header />
            <section className='home'>

                <main className='homeMain'>
                    <div className='homeMain-left'>
                        <div>
                            <h1>{t('Home.main.title')}</h1>
                            <p>{t('Home.main.description')}</p>
                        </div>
                        <div>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Linkedin</a></li>
                                <li><a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
                                <li><a href="https://www.instagram.com/dev_brianglezn" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
                            </ul>
                            <a href="mailto:brianglezn@gmail.com" className='custom-button' target="_blank" rel="noopener noreferrer">{t('Home.main.contact')}</a>
                        </div>
                    </div>
                    <div className='homeMain-right'>
                        <img src={brianHome} alt="Brian G. Novoa" />
                    </div>
                </main>

                <section className="homeProjects">
                    <h2>{t('Home.projects.title')}</h2>
                    <p>{t('Home.projects.description')}</p>

                    <div className="homeProjects-items">
                        <ProjectItem
                            imgSrc={logoPL}
                            title={t('Projects.projectItems.ProfitLost.title')}
                            description={t('Projects.projectItems.ProfitLost.description')}
                            href="/projects/ProfitLost"
                        />
                        <ProjectItem
                            imgSrc={logoWordpress}
                            title={t('Projects.projectItems.WP.title')}
                            description={t('Projects.projectItems.WP.description')}
                            href="/projects/WP"
                        />
                    </div>
                    <a href="/projects" className=''>{t('Home.projects.all')}</a>
                </section>

            </section>
            <Footer />
        </>
    );
}
