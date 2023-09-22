import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Projects />
            <Services />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;