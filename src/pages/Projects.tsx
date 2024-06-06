import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectItem from '../components/ProjectItem'
import logoPL from '../assets/projects/logoPL.svg';
import logoElearning from '../assets/projects/logoElearning.svg';
import logoWordpress from '../assets/projects/logoWordpress.svg';
import './Projects.scss'

export default function Projects() {
    return (
        <>
            <Header />
            <section className='projects'>
                <h2>Projects</h2>
                <p>These are the projects in which I have worked, I started making wordpress websites for a few companies and now I took the step to make code projects especially with MERN stack: Mongo, Express, React and Node.</p>

                <section className="projectsList">
                    <ProjectItem
                        imgSrc={logoPL}
                        title="Profit & Lost"
                        description="App for personal finance management"
                        href="/projects/profit-and-lost"
                    />
                    <ProjectItem
                        imgSrc={logoWordpress}
                        title="Wordpress Webs"
                        description="Some of the websites I have done in Wordpress"
                        href="/projects/wordpress-webs"
                    />
                    <ProjectItem
                        imgSrc={logoElearning}
                        title="eLearning Platform"
                        description="App in progress for an e-learning platform"
                        href="/projects/elearning-platform"
                    />
                </section>

            </section>
            <Footer />
        </>
    )
}
