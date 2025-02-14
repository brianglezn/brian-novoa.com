import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './Header.scss';
import ESflag from '../assets/flags/ES_flag.svg'
import ENflag from '../assets/flags/EN_flag.svg'
import IconLinkedin from './icons/IconLinkedin';
import IconGitHub from './icons/IconGitHub';
import IconInstagram from './icons/IconInstagram';
import IconBarsSolid from './icons/IconBarsSolid';
import IconXClose from './icons/IconXClose';

export default function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    const [scrolled, setScrolled] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

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
                        <a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><IconLinkedin /></a>
                        <a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><IconGitHub /></a>
                        <a href="https://www.instagram.com/dev_brianglezn" target="_blank" rel="noopener noreferrer"><IconInstagram /></a>
                        <img
                            src={i18n.language === 'en' ? ENflag : ESflag}
                            alt={i18n.language === 'en' ? 'English' : 'Español'}
                            onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                            className="language-icon"
                        />
                    </div>

                    <div className="headerMobile custom-icons" onClick={toggleSidebar}><IconBarsSolid /></div>
                </div>

            </header>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="closeBtn custom-icons" onClick={closeSidebar}><IconXClose /></button>

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
                        <a href="https://www.linkedin.com/in/brianglezn/" target="_blank" rel="noopener noreferrer"><IconLinkedin /></a>
                        <a href="https://github.com/brianglezn/" target="_blank" rel="noopener noreferrer"><IconGitHub /></a>
                        <a href="https://www.instagram.com/brinovoa_dev" target="_blank" rel="noopener noreferrer"><IconInstagram /></a>
                        <img
                            src={i18n.language === 'en' ? ENflag : ESflag}
                            alt={i18n.language === 'en' ? 'English' : 'Español'}
                            onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                            className="language-icon"
                        />
                    </div>
                </nav>

            </div>
        </>
    );
}
