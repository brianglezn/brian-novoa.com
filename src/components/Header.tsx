import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Importing styles
import './Header.scss';

// Importing icons
import { FaLinkedin, FaGithub, FaInstagram, FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

// Main component
export default function Header() {
    const { t } = useTranslation();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    const [scrolled, setScrolled] = useState(false);

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        // Function to handle location changes
        const handleLocationChange = () => {
            setActiveLink(window.location.pathname);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    return (
        <>
            <header>
                <div className={`headerContainer ${scrolled ? 'scrolled' : ''}`}>
                    <a href="/"><img src="/logo.png" alt="Logo" className='logo' /></a>

                    <nav className="headerMenu">
                        <ul>
                            <li>
                                <a
                                    href="/"
                                    className={activeLink === "/" ? "active" : ""}
                                    onClick={() => setActiveLink("/")}
                                >
                                    {t('Header.home')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className={activeLink === "/projects" ? "active" : ""}
                                    onClick={() => setActiveLink("/projects")}
                                >
                                    {t('Header.projects')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className={activeLink === "/about" ? "active" : ""}
                                    onClick={() => setActiveLink("/about")}
                                >
                                    {t('Header.about')}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="headerBtns custom-icons">
                        <a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.instagram.com/dev_brianglezn" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>

                    <div className="headerMobile custom-icons" onClick={toggleSidebar}><FaBars /></div>
                </div>

            </header>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="closeBtn custom-icons" onClick={closeSidebar}><IoClose /></button>

                <nav className="sidebarMenu">
                    <ul>
                        <li>
                            <a href="/" onClick={closeSidebar} className={activeLink === "/" ? "active" : ""}>{t('Header.home')}</a>
                        </li>
                        <li>
                            <a href="/projects" onClick={closeSidebar} className={activeLink === "/projects" ? "active" : ""}>{t('Header.projects')}</a>
                        </li>
                        <li>
                            <a href="/about" onClick={closeSidebar} className={activeLink === "/about" ? "active" : ""}>{t('Header.about')}</a>
                        </li>
                    </ul>

                    <div className="sidebarBtns custom-icons">
                        <a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.instagram.com/brinovoa_dev" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </nav>

            </div>
        </>
    );
}
