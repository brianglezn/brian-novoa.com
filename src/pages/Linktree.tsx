import './Linktree.scss';
import { useParams } from 'react-router-dom';

// Importing components
import Footer from '../components/Footer';

// Importing linktree data
import { linktreeUsers } from './data/linktreeData';

// Main component for displaying the linktree
export default function Linktree() {
    const { userId } = useParams();
    const userData = linktreeUsers.find(user => user.path === userId);

    // Check if user data is found
    if (!userData) {
        return <div>User not found</div>;
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