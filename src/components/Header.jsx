import { useEffect } from 'react';

import './Header.css';

function Header() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const scrollToTopButton = document.getElementById('scrollToTopButton');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    }, []);

    return (
        <header className='header'>
            <div className='header-list'>
                <ul className='menu'>
                    <li><a href='#projects'>Proyectos</a></li>
                    <li><a href='#services'>Servicios</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                </ul>
            </div>
            <button className='fa-solid fa-chevron-up' id='scrollToTopButton' onClick={scrollToTop}></button>
            {/* <div className='links'>
                    <a className='fa-brands fa-github' target='_blank' rel='noreferrer' href='https://github.com/brianglezn'></a>
                    <a className='fa-brands fa-linkedin' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/brianglezn/'></a>
                    <a className='fa-brands fa-instagram' target='_blank' rel='noreferrer' href='https://www.instagram.com/brianglezn.es/'></a>
                </div> */}
        </header>
    )
}

export default Header