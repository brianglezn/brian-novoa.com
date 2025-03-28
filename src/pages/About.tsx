import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

// Importing styles
import './About.scss';

// Importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';

// Importing icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Importing images
const BRIAN_ABOUT_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470062/brian-novoa.com/img/brian_about.jpg';

// Importing resumes
import brianResumeEN from '../assets/CV/[EN] Brian Gonzalez Novoa.pdf';
import brianResumeES from '../assets/CV/[ES] Brian Gonzalez Novoa.pdf';

// Importing logos
const LOGO_ACCENTURE_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470062/brian-novoa.com/experience/accenture.jpg';
const LOGO_UNIVERSAE_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470062/brian-novoa.com/experience/universae.png';
const LOGO_I2C_URL = 'https://res.cloudinary.com/dz0mwxb0v/image/upload/v1741470062/brian-novoa.com/experience/i2c.png';

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

export default function About() {
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
      <section className='about'>
        <section className='aboutMain'>
          <div className='aboutMain-left'>
            <div>
              <h2>Brian González Novoa</h2>
              <p>{t('About.description1')}</p>
              <p>{t('About.description2')}</p>
            </div>
            <div>
              <ul>
                <li><a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> Linkedin</a></li>
                <li><a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
                <li><a href="https://www.instagram.com/brinovoa_dev" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
                <li><a href="mailto:brianglezn@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /> Email</a></li>
              </ul>
            </div>
            <a href={brianResume} className='custom-button' target="_blank" rel="noopener noreferrer">{t('About.resume')}</a>
          </div>
          <div className='aboutMain-right'>
            <img src={BRIAN_ABOUT_URL} alt="Brian G. Novoa" />
          </div>
        </section>

        <section className='aboutSkills'>
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

        <section className="aboutExperience">
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
                          {expanded[key] ? 'Ver menos' : 'Ver más'}
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
