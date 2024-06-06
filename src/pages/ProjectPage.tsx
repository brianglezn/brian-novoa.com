import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './ProjectPage.scss';

export default function ProjectPage() {
    const { projectId } = useParams<{ projectId: string }>();

    return (
        <section className='projectsPage'>
            <Header />
            <main>
                <h1>{projectId}</h1>
            </main>
            <Footer />
        </section>
    );
}
