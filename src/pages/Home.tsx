import { useTranslation } from 'react-i18next';

// Importing styles
import './Home.scss';

// Importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';
import ProjectItem from '../components/ProjectItem';

// Importing icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Importing images
const BRIAN_HOME_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741469997/brian-novoa.com/img/brian_home.jpg';

// Importing project logos
const LOGO_PL_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470590/brian-novoa.com/Projects/profit-lost/logoPL.png';
const LOGO_WP_URL =  'https://s.w.org/style/images/about/WordPress-logotype-simplified.png';

// Main component for the home page
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
                                <li><a href="https://www.instagram.com/brian.developer" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
                            </ul>
                            <a href="mailto:brianglezn@gmail.com" className='custom-button' target="_blank" rel="noopener noreferrer">{t('Home.main.contact')}</a>
                        </div>
                    </div>
                    <div className='homeMain-right'>
                        <img src={BRIAN_HOME_URL} alt="Brian G. Novoa" />
                    </div>
                </main>

                <section className="homeProjects">
                    <h2>{t('Home.projects.title')}</h2>
                    <p>{t('Home.projects.description')}</p>

                    <div className="homeProjects-items">
                        <ProjectItem
                            imgSrc={LOGO_PL_URL}
                            title={t('Projects.projectItems.ProfitLost.title')}
                            description={t('Projects.projectItems.ProfitLost.description')}
                            href="/projects/ProfitLost"
                        />
                        <ProjectItem
                            imgSrc={LOGO_WP_URL}
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
