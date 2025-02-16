import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import './About.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';
import IconReact from '../components/icons/IconReact';
import IconJavaScript from '../components/icons/IconJavaScript';
import IconTypescript from '../components/icons/IconTypescript';
import IconSass from '../components/icons/IconSass';
import IconMongo from '../components/icons/IconMongo';
import IconHTML from '../components/icons/IconHTML';
import IconCSS from '../components/icons/IconCSS';
import IconNode from '../components/icons/IconNode';
import IconLinkedin from '../components/icons/IconLinkedin';
import IconGitHub from '../components/icons/IconGitHub';
import IconInstagram from '../components/icons/IconInstagram';
import IconEmail from '../components/icons/IconEmail';
import brianAbout from '../assets/img/brian_about.jpg';
import brianResumeEN from '../assets/CV/[EN] Brian Gonzalez Novoa.pdf';
import brianResumeES from '../assets/CV/[ES] Brian Gonzalez Novoa.pdf';
import logoAccenture from '../assets/experience/accenture_logo.jpg';
import logoUniversae from '../assets/experience/universae_logo.png';
import logoI2C from '../assets/experience/i2c_logo.png';

const skills = [
  {
    name: "React",
    icon: <IconReact />
  },
  {
    name: "NodeJS",
    icon: <IconNode />
  },
  {
    name: "JavaScript",
    icon: <IconJavaScript />
  },
  {
    name: "TypeScript",
    icon: <IconTypescript />
  },
  {
    name: "MongoDB",
    icon: <IconMongo />
  },
  {
    name: "HTML",
    icon: <IconHTML />
  },
  {
    name: "Sass",
    icon: <IconSass />
  },
  {
    name: "CSS",
    icon: <IconCSS />
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
      image: logoAccenture,
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
      image: logoUniversae,
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
      image: logoI2C,
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
                <li><a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"> <IconLinkedin /> Linkedin</a></li>
                <li><a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><IconGitHub /> GitHub</a></li>
                <li><a href="https://www.instagram.com/brinovoa_dev" target="_blank" rel="noopener noreferrer"><IconInstagram /> Instagram</a></li>
                <li><a href="mailto:brianglezn@gmail.com" target="_blank" rel="noopener noreferrer"><IconEmail /> Email</a></li>
              </ul>
            </div>
            <a href={brianResume} className='custom-button' target="_blank" rel="noopener noreferrer">{t('About.resume')}</a>
          </div>
          <div className='aboutMain-right'>
            <img src={brianAbout} alt="Brian G. Novoa" />
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
