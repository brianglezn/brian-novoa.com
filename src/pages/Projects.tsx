import { useTranslation } from 'react-i18next';

import './Projects.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'
import logoPL from '../assets/projects/logoPL.svg';
import logoElearning from '../assets/projects/logoElearning.svg';
import logoWordpress from '../assets/projects/logoWordpress.svg';

export default function Projects() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <section className='projects'>
                <div>
                    <h2>{t('Projects.title')}</h2>
                    <p>{t('Projects.description')}</p>

                    <section className="projectsList">
                        <ProjectItem
                            imgSrc={logoPL}
                            title={t('Projects.projectItems.ProfitLost.title')}
                            description={t('Projects.projectItems.ProfitLost.description')}
                            href="/projects/profit-and-lost"
                        />
                        <ProjectItem
                            imgSrc={logoWordpress}
                            title={t('Projects.projectItems.WP.title')}
                            description={t('Projects.projectItems.WP.description')}
                            href="/projects/wordpress-webs"
                        />
                        <ProjectItem
                            imgSrc={logoElearning}
                            title={t('Projects.projectItems.eLearning.title')}
                            description={t('Projects.projectItems.eLearning.description')}
                            href="/projects/elearning-platform"
                        />
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}
