import { useTranslation } from 'react-i18next';

// Importing styles
import './Projects.scss'

// Importing components
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'
import LanguageSelector from '../components/LanguageSelector';

// Importing project logos  
import LOGO_PL_URL from '../assets/img/projects/profit-lost/logoPL.png';
import LOGO_WP_URL from '../assets/img/projects/wordpress/wordpress-logo.png';

// Main component for displaying projects
export default function Projects() {
    const { t } = useTranslation();
    return (
        <>
            <LanguageSelector />
            <Header />
            <section className='projects'>
                <div>
                    <h2>{t('Projects.title')}</h2>
                    <p>{t('Projects.description')}</p>

                    <section className="projectsList">
                        {/* Project item for Profit & Loss application */}
                        <ProjectItem
                            imgSrc={LOGO_PL_URL}
                            title={t('Projects.projectItems.ProfitLost.title')}
                            description={t('Projects.projectItems.ProfitLost.description')}
                            href="/projects/ProfitLost"
                        />
                        {/* Project item for Wordpress websites */}
                        <ProjectItem
                            imgSrc={LOGO_WP_URL}
                            title={t('Projects.projectItems.WP.title')}
                            description={t('Projects.projectItems.WP.description')}
                            href="/projects/WP"
                        />
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}
