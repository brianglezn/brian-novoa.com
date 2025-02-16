import { useTranslation } from 'react-i18next';

import './Home.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';

import ProjectItem from '../components/ProjectItem';
import IconLinkedin from '../components/icons/IconLinkedin';
import IconGitHub from '../components/icons/IconGitHub';
import IconInstagram from '../components/icons/IconInstagram';

import brianHome from '../assets/img/brian_home.jpg';
import logoPL from '../assets/projects/PL/logoPL.svg';
import logoWordpress from '../assets/projects/WP/logoWordpress.svg';
// import logoTCHR from '../assets/projects/TalentControlHR/logoTCHR.png';
// import logoCalenbry from '../assets/projects/calenbry/logoCalenbry.png';

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
                                <li><a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><IconLinkedin /> Linkedin</a></li>
                                <li><a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><IconGitHub /> GitHub</a></li>
                                <li><a href="https://www.instagram.com/dev_brianglezn" target="_blank" rel="noopener noreferrer"><IconInstagram /> Instagram</a></li>
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
                        {/* <ProjectItem
                            imgSrc={logoTCHR}
                            title={t('Projects.projectItems.TalentControlHR.title')}
                            description={t('Projects.projectItems.TalentControlHR.description')}
                            href="/projects/TalentControlHR"
                        /> */}
                        {/* <ProjectItem
                            imgSrc={logoCalenbry}
                            title={t('Projects.projectItems.Calenbry.title')}
                            description={t('Projects.projectItems.Calenbry.description')}
                            href="/projects/Calenbry"
                        /> */}
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
