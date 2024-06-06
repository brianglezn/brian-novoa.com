import Footer from '../components/Footer'
import Header from '../components/Header'
import brianAbout from '../assets/img/brian_about.jpg';
import brianResume from '../assets/CV Brian Gonzalez Novoa.pdf';
import logoAccenture from '../assets/experience/accenture_logo.jpg';
import logoUniversae from '../assets/experience/universae_logo.png';
import logoI2C from '../assets/experience/i2c_logo.png';
import { calculateDuration } from '../helpers/utils';
import './About.scss'

export default function About() {
  const experiences = [
    {
      company: "Accenture España",
      roles: [
        {
          title: "Network & Svcs Operation Associate",
          startDate: "2021-06-01",
          endDate: "actualidad",
          description: `
            - Responsible for the commissioning of infrastructure and customer access in Vodafone Key Account projects.
            - Router (Cisco, Huawei, Teldat) and Switch Configuration.
            - Configuration of customer services such as MPLS, VPLS, INTERNET, IPSEC, SDWAN, TRUNK, ELINE. TRUNK, PRIMARY...
            - Configuration of accesses based on technologies such as Radio links, PaP Fiber, 3G/LTE and Orlas.
          `
        },
        {
          title: "Formación en Centro de Trabajo (ASIR)",
          startDate: "2021-04-01",
          endDate: "2021-06-30",
          description: `
            Performing the duties of Network & Svcs Operation Associate to complete the ASIR course with on-site training.
            - Responsible for infrastructure commissioning and customer access in Vodafone Key Account projects.
            - Configuration of CPEs (Cisco, Huawei).
            - Configuration of customer services such as MPLS and INTERNET.
            - Configuration of accesses based on technologies such as Radio links, PaP Fiber, 3G/LTE.
          `
        }
      ],
      image: logoAccenture,
      link: "https://es.linkedin.com/company/accenture-espana"
    },
    {
      company: "brian-novoa.com",
      roles: [
        {
          title: "Freelance Web Developer",
          startDate: "2020-09-01",
          endDate: "actualidad",
          description: `
            As a Freelance Frontend Developer, my specialization covers WordPress, CSS, HTML, JavaScript, TypeScript extending it now with ReactJS, creating advanced and dynamic web solutions, NodeJS and MongoDB complement my technical profile.
            My focus is on innovation, quality, and adaptability in a constantly changing technological environment.
          `
        }
      ],
      image: '/logo.png',
      link: "https://brian-novoa.com"
    },
    {
      company: "Universae",
      roles: [
        {
          title: "Full Stack Developer",
          startDate: "2024-04-01",
          endDate: "2024-06-30",
          description: `
            Performing the duties of Full Stack Developer to complete the DAM course with Workplace Training.
            During my internship I played an active role in the development of multiple projects, where I used a diverse set of technologies and programming tools, including Java, JavaScript, TypeScript, HTML, CSS, React, VSCode, NetBeans and GitHub. My responsibilities ranged from writing clean and efficient code to implementing responsive user interfaces and optimizing application functionality to enhance the user experience. I collaborated closely with development teams to ensure timely delivery of projects following coding and design best practices.
          `
        }
      ],
      image: logoUniversae,
      link: "https://www.linkedin.com/school/universae/"
    },
    {
      company: "Imagine to Create Blockchain Tech",
      roles: [
        {
          title: "Frontend Developer",
          startDate: "2023-10-01",
          endDate: "2024-01-31",
          description: `
            Developing Frontend Web Developer tasks to complete the DAW course with the Workplace Training.
            During my internship contract at IMAGINE, I have the opportunity to work on the development of the company's main website and the websites of various internal projects. My main focus is programming and web design, ensuring its functionality and usability. This experience is allowing me to acquire new skills and knowledge in the field of web development, and I am excited to continue learning, especially about Front End.
          `
        }
      ],
      image: logoI2C,
      link: "https://www.linkedin.com/company/i2c-bt/"
    }
  ];

  return (
    <>
      <Header />
      <section className='about'>

        <section className='aboutMain'>
          <div className='aboutMain-left'>
            <div>
              <h2>Brian González Novoa</h2>
              <p>I'm a web developer, oriented especially in front-end development. My expertise lies in building interactive web applications. I mainly work with technologies like React.js, JavaScript and TypeScript.</p>
              <p>I strongly believe in continuous learning and self-improvement, so I do my best to learn in any possible situation.</p>
            </div>
            <div>
              <ul>
                <li><a href="https://www.linkedin.com/in/brianglezn/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg> Linkedin</a></li>
                <li><a href="https://github.com/brianglezn/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" /></svg> GitHub</a></li>
                <li><a href="https://www.instagram.com/brinovoa_dev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg> Instagram</a></li>
                <li><a href="mailto:brianglezn@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg> Email</a></li>
              </ul>
            </div>
            <a href={brianResume} className='custom-button' target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
          <div className='aboutMain-right'>
            <img src={brianAbout} alt="Brian G. Novoa" />

          </div>
        </section>

        <section className="aboutExperience">
          <h2>Experiencia</h2>
          {experiences.map((exp, index) => (
            <div className="experienceCard" key={index}>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experienceImage">
                <img src={exp.image} alt={exp.company} />
              </a>
              <div className="experienceDetails">
                <h3>{exp.company}</h3>
                {exp.roles.map((role, idx) => (
                  <div key={idx}>
                    <p>{role.title}</p>
                    <time>
                      {new Date(role.startDate).toLocaleString('default', { month: 'short' })}. {new Date(role.startDate).getFullYear()} -{' '}
                      {role.endDate.toLowerCase() === 'actualidad' ? 'Actualidad' : `${new Date(role.endDate).toLocaleString('default', { month: 'short' })}. ${new Date(role.endDate).getFullYear()}`} | {calculateDuration(role.startDate, role.endDate)}
                    </time>
                    <p className="description" dangerouslySetInnerHTML={{ __html: role.description.replace(/\n/g, '<br />') }}></p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>



      </section>
      <Footer />
    </>
  )
}
