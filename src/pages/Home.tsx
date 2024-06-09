import { useTranslation } from 'react-i18next';

import './Home.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectItem from '../components/ProjectItem';
import IconLinkedin from '../components/icons/IconLinkedin';
import IconGitHub from '../components/icons/IconGitHub';
import IconInstagram from '../components/icons/IconInstagram';
import brianHome from '../assets/img/brian_home.jpg';
import logoPLAzul from '../assets/projects/PL/logoPL-azul.svg';
import logoWordpressAzul from '../assets/projects/WP/logoWordpress-azul.svg';
import logoElearningAzul from '../assets/projects/eLearning/logoElearning-azul.svg';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
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
                                <li><a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><IconLinkedin /> Linkedin</a></li>
                                <li><a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><IconGitHub /> GitHub</a></li>
                                <li><a href="https://www.instagram.com/brinovoa_dev" target="_blank" rel="noopener noreferrer"><IconInstagram /> Instagram</a></li>
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
                            imgSrc={logoPLAzul}
                            title={t('Projects.projectItems.ProfitLost.title')}
                            description={t('Projects.projectItems.ProfitLost.description')}
                            href="/projects/ProfitLost"
                        />
                        <ProjectItem
                            imgSrc={logoWordpressAzul}
                            title={t('Projects.projectItems.WP.title')}
                            description={t('Projects.projectItems.WP.description')}
                            href="/projects/WP"
                        />
                        <ProjectItem
                            imgSrc={logoElearningAzul}
                            title={t('Projects.projectItems.ELearning.title')}
                            description={t('Projects.projectItems.ELearning.description')}
                            // href="/projects/ELearning"
                            href=""
                        />
                    </div>
                    <a href="/projects" className=''>{t('Home.projects.all')}</a>
                </section>

                <section className="homeServices">
                    <h2>{t('Home.services.title')}</h2>
                </section>

            </section>
            <Footer />
        </>
    );
}
