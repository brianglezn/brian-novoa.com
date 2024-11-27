import { useTranslation } from 'react-i18next';

import './Projects.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'
import logoPL from '../assets/projects/PL/logoPL.svg';
import logoWordpress from '../assets/projects/WP/logoWordpress.svg';
// import logoCalenbry from '../assets/projects/calenbry/logoCalenbry.png';
import logoTCHR from '../assets/projects/TalentControlHR/logoTCHR.png';

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
                            href="/projects/ProfitLost"
                        />
                        <ProjectItem
                            imgSrc={logoTCHR}
                            title={t('Projects.projectItems.TalentControlHR.title')}
                            description={t('Projects.projectItems.TalentControlHR.description')}
                            href="/projects/TalentControlHR"
                        />
                        <ProjectItem
                            imgSrc={logoWordpress}
                            title={t('Projects.projectItems.WP.title')}
                            description={t('Projects.projectItems.WP.description')}
                            href="/projects/WP"
                        />
                        {/* <ProjectItem
                            imgSrc={logoCalenbry}
                            title={t('Projects.projectItems.Calenbry.title')}
                            description={t('Projects.projectItems.Calenbry.description')}
                            href="/projects/Calenbry"
                        /> */}
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}
