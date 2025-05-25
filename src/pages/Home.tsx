import { useTranslation } from 'react-i18next';

// Importing styles
import './Home.scss';

// Importing components
import Layout from '../components/Layout';
import ProjectItem from '../components/ProjectItem';

// Importing icons
import { FaReact, FaNodeJs, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

// Importing images
import BRIAN_HOME_URL from '../assets/img/brian_home.jpg';

// Importing project data
import { projectsData } from './data/projectsData';

// Importing resumes
import brianResumeES from '../assets/CV/[ES] Brian Gonzalez Novoa.pdf';

const skills = [
  {
    name: "React",
    icon: <FaReact />
  },
  {
    name: "Angular",
    icon: <FaAngular />
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
    name: "PostgreSQL",
    icon: <SiPostgresql />
  }
];

// Main component for the home page
export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className='home'>
        <main className='homeMain'>
          <div className='homeMain-container'>
            <div className='homeMain-content'>
              <h1>{t('Home.main.title')}</h1>
              <h2>{t('Home.main.job')}</h2>
              <p>{t('Home.main.description')}</p>
              <div className='homeMain-skills'>
                {skills.map((skill, index) => (
                  <div className='skillItem' key={index}>
                    {skill.icon}
                  </div>
                ))}
              </div>
              <div className="button-group">
                <a href="mailto:brian@brian-novoa.com" className='custom-button' target="_blank" rel="noopener noreferrer">{t('Home.main.contact')}</a>
                <a href={brianResumeES} className='custom-button-sec resume-button' target="_blank" rel="noopener noreferrer">{t('Home.main.resume')}</a>
              </div>
            </div>
            <div className='homeMain-profile'>
              <div className="profile-image-container">
                <img src={BRIAN_HOME_URL} alt="Brian G. Novoa" />
              </div>
            </div>
          </div>
        </main>

        <section className="homeProjects">
          <h2>{t('Home.projects.title')}</h2>
          <div className="homeProjects-grid">
            {Object.values(projectsData).map((project) => (
              <ProjectItem
                key={project.id}
                mainImage={project.mainImage}
                title={t(`Projects.projectItems.${project.id}.title`)}
                description={t(`Projects.projectItems.${project.id}.description`)}
                href={`/projects/${project.id}`}
              />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}
