import './Linktree.scss';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { linktreeUsers } from './data/linktreeData';

export default function Linktree() {
    const { userId } = useParams();
    const userData = linktreeUsers.find(user => user.path === userId);

    if (!userData) {
        return <div>Usuario no encontrado</div>;
    }

    return (
        <>
            <section className='linktree'>
                <div className='linktreeContainer'>
                    <div className='linktreeHeader'>
                        <img src={userData.avatar} alt={userData.name} className='logo' />
                        <h1>{userData.name}</h1>
                        <p>{userData.role}</p>
                    </div>
                    <div className='linktreeLinks'>
                        {userData.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className='linktreeLink'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon}
                                <div>
                                    <h2>{link.title}</h2>
                                    <p>{link.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
} 