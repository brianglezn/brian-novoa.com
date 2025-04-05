import { useState, useEffect, useRef, useCallback } from 'react';
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
import { MdEmail } from 'react-icons/md';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si';

// Importing images
const BRIAN_HOME_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741469997/brian-novoa.com/img/brian_home.jpg';

// Importing project logos
const LOGO_PL_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470590/brian-novoa.com/Projects/profit-lost/logoPL.png';
const LOGO_WP_URL =  'https://s.w.org/style/images/about/WordPress-logotype-simplified.png';

// Importing logos
const LOGO_ACCENTURE_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470062/brian-novoa.com/experience/accenture.jpg';
const LOGO_UNIVERSAE_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470062/brian-novoa.com/experience/universae.png';
const LOGO_I2C_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470062/brian-novoa.com/experience/i2c.png';

// Importing resumes
import brianResumeEN from '../assets/CV/[EN] Brian Gonzalez Novoa.pdf';
import brianResumeES from '../assets/CV/[ES] Brian Gonzalez Novoa.pdf';

const skills = [
  {
    name: "React",
    icon: <FaReact />
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />
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
    name: "HTML",
    icon: <FaHtml5 />
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />
  },
  {
    name: "Sass",
    icon: <FaSass />
  }
];

// Main component for the home page
export default function Home() {
    const { t, i18n } = useTranslation();
    
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const descriptionRefs = useRef<Record<string, HTMLParagraphElement | null>>({});

    const getExperiences = useCallback(() => [
      {
        company: "Accenture España",
        roles: [
          {
            title: t('About.experience.Accenture.roles.0.title'),
            startDate: "2021-06-01",
            endDate: t('About.experience.current'),
            description: t('About.experience.Accenture.roles.0.description')
          },
          {
            title: t('About.experience.Accenture.roles.1.title'),
            startDate: "2021-04-01",
            endDate: "2021-06-30",
            description: t('About.experience.Accenture.roles.1.description')
          }
        ],
        image: LOGO_ACCENTURE_URL,
        link: "https://es.linkedin.com/company/accenture-espana"
      },
      {
        company: "brian-novoa.com",
        roles: [
          {
            title: t('About.experience.BrianNovoa.roles.0.title'),
            startDate: "2020-09-01",
            endDate: t('About.experience.current'),
            description: t('About.experience.BrianNovoa.roles.0.description')
          }
        ],
        image: '/logo.png',
        link: "https://brian-novoa.com"
      },
      {
        company: "Universae",
        roles: [
          {
            title: t('About.experience.Universae.roles.0.title'),
            startDate: "2024-04-01",
            endDate: "2024-06-30",
            description: t('About.experience.Universae.roles.0.description')
          }
        ],
        image: LOGO_UNIVERSAE_URL,
        link: "https://www.linkedin.com/school/universae/"
      },
      {
        company: "Imagine to Create Blockchain Tech",
        roles: [
          {
            title: t('About.experience.I2C.roles.0.title'),
            startDate: "2023-10-01",
            endDate: "2024-01-31",
            description: t('About.experience.I2C.roles.0.description')
          }
        ],
        image: LOGO_I2C_URL,
        link: "https://www.linkedin.com/company/i2c-bt/"
      }
    ], [t]);

    const experiences = getExperiences();

    useEffect(() => {
      experiences.forEach((exp, expIndex) => {
        exp.roles.forEach((_, roleIndex) => {
          const key = `${expIndex}-${roleIndex}`;
          const element = descriptionRefs.current[key];
          if (element && element.scrollHeight > element.clientHeight) {
            setExpanded((prev) => ({
              ...prev,
              [key]: false
            }));
          }
        });
      });
    }, [experiences]);

    const toggleExpand = (expIndex: number, roleIndex: number) => {
      setExpanded((prev) => ({
        ...prev,
        [`${expIndex}-${roleIndex}`]: !prev[`${expIndex}-${roleIndex}`]
      }));
    };

    const truncateText = (text: string, maxLength: number) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + '...';
    };

    const brianResume = i18n.language === 'en' ? brianResumeEN : brianResumeES;

    return (
        <>
            <LanguageSelector />
            <Header />
            <section className='home'>

                <main className='homeMain'>
                    <div className='homeMain-left'>
                        <div>
                            <h1>Brian González Novoa</h1>
                            <p>{t('About.description1')}</p>
                            <p>{t('About.description2')}</p>
                        </div>
                        <div>
                            <ul className="social-links">
                                <li><a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> <span>Linkedin</span></a></li>
                                <li><a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><FaGithub /> <span>GitHub</span></a></li>
                                <li><a href="https://www.instagram.com/brinovoa_dev" target="_blank" rel="noopener noreferrer"><FaInstagram /> <span>Instagram</span></a></li>
                                <li><a href="mailto:brianglezn@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /> <span>Email</span></a></li>
                            </ul>
                            <div className="button-group">
                              <a href="mailto:brianglezn@gmail.com" className='custom-button' target="_blank" rel="noopener noreferrer">{t('Home.main.contact')}</a>
                              <a href={brianResume} className='custom-button resume-button' target="_blank" rel="noopener noreferrer">{t('About.resume')}</a>
                            </div>
                        </div>
                    </div>
                    <div className='homeMain-right'>
                        <img src={BRIAN_HOME_URL} alt="Brian G. Novoa" />
                    </div>
                </main>

                <section className='homeSkills'>
                  <h2>{t('About.skills')}</h2>
                  <div className='skillsContainer'>
                    {skills.map((skill, index) => (
                      <div className='skillItem' key={index}>
                        {skill.icon}
                        <p>{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </section>

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

                <section className="homeExperience">
                  <h2>{t('About.experience.title')}</h2>
                  {experiences.map((exp, index) => (
                    <div className="experienceCard" key={index}>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experienceImage">
                        <img src={exp.image} alt={exp.company} />
                      </a>
                      <div className="experienceDetails">
                        <h3>{exp.company}</h3>
                        {exp.roles.map((role, roleIndex) => {
                          const key = `${index}-${roleIndex}`;
                          return (
                            <div key={roleIndex}>
                              <p>{role.title}</p>
                              <time>
                                {i18n.language === 'en'
                                  ? `${new Date(role.startDate).toLocaleString('en-US', { month: 'short' })}. ${new Date(role.startDate).getFullYear()} - ${role.endDate === t('About.experience.current')
                                    ? t('About.experience.current')
                                    : `${new Date(role.endDate).toLocaleString('en-US', { month: 'short' })}. ${new Date(role.endDate).getFullYear()}`
                                  }`
                                  : `${new Date(role.startDate).toLocaleString('default', { month: 'short' })}. ${new Date(role.startDate).getFullYear()} - ${role.endDate === t('About.experience.current')
                                    ? t('About.experience.current')
                                    : `${new Date(role.endDate).toLocaleString('default', { month: 'short' })}. ${new Date(role.endDate).getFullYear()}`
                                  }`}
                              </time>
                              <p
                                ref={(el) => descriptionRefs.current[key] = el}
                                className={`description ${expanded[key] ? 'expanded' : ''}`}
                                dangerouslySetInnerHTML={{ __html: expanded[key] ? role.description.replace(/\n/g, '<br />') : truncateText(role.description.replace(/\n/g, '<br />'), 200) }}
                              ></p>
                              {role.description.length > 200 && (
                                <button onClick={() => toggleExpand(index, roleIndex)} className="toggleButton">
                                  {expanded[key] ? t('About.experience.less') : t('About.experience.more')}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </section>

            </section>
            <Footer />
        </>
    );
}
